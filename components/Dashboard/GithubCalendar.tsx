'use client'

import { useEffect, useState } from 'react'
import { configs } from '@/constants/configs'

const GithubCalendar = () => {
  const [totalContributions, setTotalContributions] = useState(0)
  const [follower, setFollower] = useState(0)
  const [repo, setRepo] = useState(0)

  const getActivity = async () => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1).toISOString()
    const query = `
      query {
        user(login: "amarNrddn") {
          contributionsCollection(from: "${startOfYear}", to: "${new Date().toISOString()}") {
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
            totalRepositoryContributions
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
      const contributionsData = data.data.user.contributionsCollection
      const total =
        contributionsData.totalCommitContributions +
        contributionsData.totalPullRequestContributions +
        contributionsData.totalIssueContributions +
        contributionsData.totalRepositoryContributions

      setTotalContributions(total)
    } catch (error) {
      console.error('Error fetching activity data:', error)
    }
  }

  const getProfile = async () => {
    try {
      const response = await fetch('https://api.github.com/users/amarNrddn', {
        headers: {
          Authorization: `Bearer ${configs.token}`,
        },
      })
      const data = await response.json()
      setFollower(data.followers)
      setRepo(data.public_repos)
    } catch (error) {
      console.error('Error fetching profile data:', error)
    }
  }

  useEffect(() => {
    getActivity()
    getProfile()
  }, [])

  return (
    <div className="grid grid-cols-2 md:flex gap-4 mb-5 mt-4">
      <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
        <p className="text-sm">Total Contributions</p>
        <p className="text-xl font-semibold text-green-500">{totalContributions}</p>
      </div>
      <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
        <p className="text-sm">Repositories</p>
        <p className="text-xl font-semibold text-green-500">{repo}</p>
      </div>
      <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
        <p className="text-sm">Followers</p>
        <p className="text-xl font-semibold text-green-500">{follower}</p>
      </div>
      <div className="shadow-lg rounded-lg py-2 pl-3 md:w-1/5">
        <p className="text-sm">Average</p>
        <p className="text-xl font-semibold text-green-500">
          1<span className="text-gray-500 text-sm">/day</span>
        </p>
      </div>
    </div>
  )
}

export default GithubCalendar
