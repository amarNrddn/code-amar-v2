'use client'

import { useEffect, useState } from 'react'
import { configs } from '@/constants/configs'
import { useLanguage } from '@/context/LanguageProvider'

const Spinner = () => (
  <div className="flex items-center justify-center h-7">
    <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin dark:border-white border-gray-900" />
  </div>
)

const GithubCalendar = () => {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [totalContributions, setTotalContributions] = useState(0)
  const [follower, setFollower] = useState(0)
  const [repo, setRepo] = useState(0)
  const [average, setAverage] = useState(0)

  const getActivity = async () => {
    if (!configs.token) return
    const now = new Date()
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
    const query = `
      query {
        user(login: "amarNrddn") {
          contributionsCollection(from: "${oneYearAgo.toISOString()}", to: "${now.toISOString()}") {
            contributionCalendar {
              totalContributions
            }
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
            totalRepositoryContributions
            totalPullRequestReviewContributions
          }
        }
      }
    `

    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${configs.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      const data = await response.json()
      if (data.errors) {
        console.error('GraphQL errors:', JSON.stringify(data.errors))
        return
      }
      const c = data.data?.user?.contributionsCollection
      if (!c) {
        console.error('Unexpected response:', JSON.stringify(data))
        return
      }
      const total = c.contributionCalendar?.totalContributions ?? 0
   

      setTotalContributions(total)

      const daysPassed = Math.ceil((now.getTime() - oneYearAgo.getTime()) / (1000 * 60 * 60 * 24))
      setAverage(Math.round(total / daysPassed))
    } catch (error) {
      console.error('Error fetching activity data:', error)
    }
  }

  const getProfile = async () => {
    try {
      const response = await fetch('https://api.github.com/users/amarNrddn')
      const data = await response.json()
      setFollower(data.followers)
      setRepo(data.public_repos + (data.total_private_repos || 0))
    } catch (error) {
      console.error('Error fetching profile data:', error)
    }
  }

  useEffect(() => {
    Promise.all([getActivity(), getProfile()]).finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 md:flex gap-4 mb-5 mt-4">
        <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
          <p className="text-sm">{t('github.total')}</p>
          {loading ? <Spinner /> : <p className="text-xl font-medium text-green-500">{totalContributions}</p>}
        </div>
        <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
          <p className="text-sm">{t('github.repos')}</p>
          {loading ? <Spinner /> : <p className="text-xl font-medium text-green-500">{repo}</p>}
        </div>
        <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
          <p className="text-sm">{t('github.followers')}</p>
          {loading ? <Spinner /> : <p className="text-xl font-medium text-green-500">{follower}</p>}
        </div>
        <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
          <p className="text-sm">{t('github.average')}</p>
          {loading ? <Spinner /> : <p className="text-xl font-medium text-green-500">{average}<span className="text-gray-500 text-sm">{t('github.perDay')}</span></p>}
        </div>
      </div>
    </>
  )
}

export default GithubCalendar
