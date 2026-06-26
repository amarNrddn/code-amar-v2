'use client'

import { useEffect, useState } from 'react'

interface GitHubStats {
  totalCommits: number
  totalPRs: number
  totalIssues: number
  totalRepos: number
  followers: number
  repos: number
}

const GithubCalendar = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const username = 'amarNrddn'

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/events?per_page=100`),
        ])
        const userData = await userRes.json()
        const eventsData = await eventsRes.json()

        const totalCommits = eventsData
          .filter((e: any) => e.type === 'PushEvent')
          .reduce((acc: number, e: any) => acc + (e.payload?.commits?.length || 0), 0)

        setStats({
          totalCommits,
          totalPRs: userData.public_repos || 0,
          totalIssues: 0,
          totalRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          repos: userData.public_repos || 0,
        })
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="w-full">
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt="GitHub contribution chart"
        className="w-full rounded-md"
      />

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {[
            { label: 'Commits', value: stats.totalCommits },
            { label: 'Repos', value: stats.repos },
            { label: 'PRs', value: stats.totalPRs },
            { label: 'Issues', value: stats.totalIssues },
            { label: 'Followers', value: stats.followers },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-lg dark:bg-gray-900 bg-gray-100 text-center"
            >
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GithubCalendar
