// components/ModalDialog.jsx
import { Dialog, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Fragment } from 'react';




export default function ModalDialog({ isOpen, close, title, maxWidth = 'max-w-md', children  }) {
  

  return (
    
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full ${maxWidth} transform overflow-hidden rounded-lg bg-background-dark p-6 text-left align-middle shadow-xl transition-all`}>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-text-600 flex justify-between items-center w-full"
                >
                  <span>{title}</span>
                  <span>
                    <button>
                        <Icon icon="formkit:close" className='w-full h-full text-lg' onClick={close} />
                    </button>
                  </span>
                </Dialog.Title>
                <div className="mt-5">
                  {children}
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  );
}
