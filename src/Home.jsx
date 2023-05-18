import './App.css'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'

export const Home = () => {
  return (
    <div>
      <>
        <Navbar title={'Solicitud Excepciones'} />
        <Search />
        <div className='shadow-sm'>
          <div className='  grid grid-cols-2 gap-4  content-center p-4 '>
            <div className='flex flex-wrap -mx-3 mb-2 mt-8'>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  DPI
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='DPI'
                  value={'123123'}
                />
              </div>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  NOMBRE
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='NOMBRE'
                  value={'JUAN FERNANDEZ'}
                />
              </div>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  Perfil Cliente
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='Perfil Cliente'
                  value={'default'}
                />
              </div>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  Tasa Asignada
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='Tasa'
                  value={'40'}
                />
              </div>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  MONTO
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='MONTO'
                  value={'5000'}
                />
              </div>
              <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  PLAZO
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='PLAZO'
                  value={'18'}
                />
              </div>
              <div className='w-full px-3 mb-6 md:mb-0 mt-2'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
                  htmlFor='grid-city'
                >
                  COMENTARIO
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-city'
                  type='text'
                  placeholder='COMENTARIO'
                  value={'LSLSLSLALASLSAD'}
                />
              </div>
            </div>
            <div>
              <h3 className='mb-4 font-semibold text-gray-900 dark:text-white'>
                EXCEPCIONES
              </h3>
              <ul className='w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center  pl-4 gap-3'>
                    <input
                      id='vue-checkbox'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 text-[#025464] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='vue-checkbox'
                      className='w-full py-3 ml-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Excepción por Precio
                    </label>
                  </div>
                </li>
                <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center pl-4 gap-3'>
                    <input
                      id='react-checkbox'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 text-[#025464] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='react-checkbox'
                      className='w-full py-3 ml-2 text-sm text-left  font-medium text-gray-900 dark:text-gray-300'
                    >
                      Excepción por Perfil
                    </label>
                  </div>
                </li>
                <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center pl-4 gap-3'>
                    <input
                      id='angular-checkbox'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 text-[#025464] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='angular-checkbox'
                      className='w-full py-3 ml-2 text-sm text-left  font-medium text-gray-900 dark:text-gray-300'
                    >
                      Excepción por Edad
                    </label>
                  </div>
                </li>
                <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center  pl-4 gap-3'>
                    <input
                      id='laravel-checkbox'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 text-[#025464]  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='laravel-checkbox'
                      className='w-full py-3 ml-2  text-left text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Excepción por Numero de Cuotas
                    </label>
                  </div>
                </li>
                <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center  pl-4 gap-3'>
                    <input
                      id='laravel-checkbox'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 text-[#025464]  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='laravel-checkbox'
                      className='w-full py-3 ml-2  text-left text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Excepción por Sustento de Ingresos
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex items-center justify-center w-full'>
            <label
              htmlFor='dropzone-file'
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
            >
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
                  aria-hidden='true'
                  className='w-10 h-10 mb-3 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                  ></path>
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id='dropzone-file' type='file' className='hidden' />
            </label>
          </div>

          <a
            href='/autoriza'
            className='w-full bg-[#025464] text-white hover:bg-gray-300  font-bold py-2 px-4 rounded inline-flex items-center mb-4 mt-4 text-center justify-center'
          >
            <span className='text-center'>Solicitar Excepción</span>
          </a>
        </div>
      </>
    </div>
  )
}

export default Home
