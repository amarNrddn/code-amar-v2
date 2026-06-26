const resources = [
  { title: 'HTML & CSS', url: 'https://youtube.com/playlist?list=PLFIM0718LjIUu0SpWCBsi2Mx8t2immJp1' },
  { title: 'Bootstrap 5', url: 'https://youtube.com/playlist?list=PLFIM0718LjIVVvRSreLy8k68bkx0xtHjH' },
  { title: 'Tailwind CSS', url: 'https://youtube.com/playlist?list=PLFIM0718LjIU2aQkSop-H7GjDkn7Sd-cn' },
  { title: 'JavaScript', url: 'https://youtube.com/playlist?list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w' },
  { title: 'React JS', url: 'https://youtube.com/playlist?list=PLFIM0718LjIUu0SpWCBsi2Mx8t2immJp1' },
  { title: 'Git & GitHub', url: 'https://youtube.com/playlist?list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf' },
]

const Roadmap = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-xl mb-4">Learning Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg dark:bg-gray-900 bg-gray-100 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <h3 className="font-semibold">{item.title}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Roadmap
