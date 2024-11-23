const stats = [
    { id: 1, name: 'Happy Customer', value: '20k +' },
    { id: 2, name: 'Employee', value: '150 +' },
    { id: 3, name: 'Years of experience', value: '25 +' },
  ]

const Stats = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 " >{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl" style={{color:'#34B778'}}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
};

export default Stats;