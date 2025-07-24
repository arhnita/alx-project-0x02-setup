import React from 'react'
import { type UserProps } from '../../interfaces'

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-center mb-4">
        <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
          <span className="text-blue-600 font-bold text-xl">
            {name.charAt(0)}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500">@{username}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-gray-600">{email}</span>
        </div>
        
        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-gray-600">{phone}</span>
        </div>
        
        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600">{address.city}, {address.zipcode}</span>
        </div>
        
        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
          <span className="text-blue-600 hover:text-blue-800">
            <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-sm">
          <p className="font-medium text-gray-800">{company.name}</p>
          <p className="text-gray-500 italic">{company.catchPhrase}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard