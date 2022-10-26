import imgWarcraftLog from '../../assets/imgs/logoWarcraftlog.png';
import imgRaiderio from '../../assets/imgs/logoRaiderio.webp';

const ProfilePage = () => {
return (
    <div className='flex justify-center mt-10 text-white font-bold h-5/6'>
        <div className='flex flex-col bg-container w-2/4 rounded-xl p-8 mr-10'>
            <p className='text-5xl'>Steakozor</p>
            <p className='text-3xl'>Elune</p>
            <p className='text-3xl my-3 text-red-700'>Death Knight - Unholy</p>
            <p className='text-3xl'><span className='text-violet-500'>iLVL :</span> 180</p>
            <p className='text-3xl'><span className='text-orange-500'>RIO :</span> 1900</p>
            <div className='flex items-center mt-5'>
                <img className='w-10 mr-3' src={imgWarcraftLog} alt="logo de warcraft logs" />
                <a href="https://fr.warcraftlogs.com/character/eu/elune/steakozor" target='blank_'>Warcraft logs</a>
            </div>
            <div className='flex items-center'>
                <img className='w-10 mr-3' src={imgRaiderio} alt="logo de raider io" />
                <a href="https://raider.io/characters/eu/elune/Steakozor" target='blank_'>Raider.io</a>
            </div>
            <div className='flex flex-col bg-container w-full h-full rounded-xl p-8 mr-10 mt-5'>
                <p className='text-3xl'>logs flem ajd</p>
            </div>
        </div>
        <div className='flex flex-col bg-container w-1/4 rounded-xl p-8'>
            <img className="object-none h-full" src="https://render.worldofwarcraft.com/eu/character/elune/19/193631763-main-raw.png" alt="profil du personnage" />
        </div>
    </div>
)
}

export default ProfilePage
