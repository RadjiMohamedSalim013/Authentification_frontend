import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'

const Header = () => {

  const { userData } = useContext(AppContent)

  return (
    <div>
      <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
        <img src={assets.header_img} alt='' className='w-36 h-36 rounded-full mb-6' />

        <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
          Salut {userData?.name || 'Développeur'} !
          <img src={assets.hand_wave} alt='' className='w-8 aspect-square' />
        </h1>

        <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Bienvenue sur notre application</h2>
        <p className='mb-8 max-w-md'>
          Commençons par une visite rapide du produit et vous serez opérationnel en un rien de temps !
        </p>
        <button className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'>
          Commencer
        </button>
      </div>

      <footer className='w-full text-center py-2 bg-gray-50 fixed bottom-0 left-0'>
        <p>© 2025 Radji Mohamed Salim. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default Header
