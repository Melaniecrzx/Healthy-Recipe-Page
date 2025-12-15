import searchIcon from '../../../public/assets/images/icon-search.svg';

export default function SearchFilters({searchRecipe, setSearchRecipe}) {


   
    return (
        <section className='w-full'>
            <div className='bg-white flex px-4 py-2.5 gap-2 rounded-[10px]'>
                <img src={searchIcon} alt='Search Icon' className='w-5 h-5' />
                    <input
                    placeholder='Search by name or ingredient...'
                    value={searchRecipe}
                    onChange={e => setSearchRecipe( e.target.value)} 
                    className='w-full'/>
                
            </div>
        
        </section>

    )
}