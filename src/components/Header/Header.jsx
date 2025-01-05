
import profile from '/images/profile.png'
const Header = () => {
    return (
        <div className='  flex justify-between p-4 border-b-2 mx-4'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="profile" />
            
        </div>
    );
}

export default Header;