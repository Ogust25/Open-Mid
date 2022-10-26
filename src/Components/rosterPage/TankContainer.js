const TankContainer = ({ players }) => {
    const tanks = players.filter(x => x.role === "tank");

    return (
      <div className='flex items-center pb-10 ml-10'>
          <p className='text-2xl'>TANK -</p>
          <div className='flex flex-wrap'>
              {tanks.map((tank) => (
                  <img className='ml-5 w-24 rounded-lg drop-shadow-xl' key={tank.id} src={tank.src} alt={'Carde de ' + tank.name}></img>
              ))}
          </div>
      </div>
    )
}

export default TankContainer
