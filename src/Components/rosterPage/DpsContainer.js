const DpsContainer = ({ players }) => {
    const dpss = players.filter(x => x.role === "dps");

    return (
      <div className='flex items-center pb-10 ml-10'>
          <p className='text-2xl ml-3'>DPS -</p>
          <div className='flex flex-wrap'>
              {dpss.map((dps) => (
                  <img className='ml-5 w-24 rounded-lg drop-shadow-xl' key={dps.id} src={dps.src} alt={'Carde de ' + dps.name}></img>
              ))}
          </div>
      </div>
    )
}

export default DpsContainer
