const HealContainer = ({ players }) => {
    const healers = players.filter(x => x.role === "heal");

    return (
        <div className='flex items-center pb-10 ml-10'>
            <p className='text-2xl'>HEAL -</p>
            <div id='healContainer' className='flex flex-wrap'>
                {healers.map((healer) => (
                    <img className='ml-5 w-24 rounded-lg drop-shadow-xl' key={healer.id} src={healer.src} alt={'Carde de ' + healer.name}></img>
                ))}
            </div>
      </div>
    )
}

export default HealContainer
