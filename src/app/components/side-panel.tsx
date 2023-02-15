import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Size {
  export const SMALL = "small";
  export const WIDE = "wide";
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SidePanel({
  size,
  showPanel,
  setShowPanel,
  title,
  children,
}: {
  size?: typeof Size.SMALL | typeof Size.WIDE;
  showPanel: boolean;
  setShowPanel: (state: boolean) => void;
  title: string;
  children: JSX.Element;
}) {
  return (
    <Transition.Root show={showPanel} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowPanel}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={classNames(
                size === Size.WIDE ? "sm:pl-16" : "",
                "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className={classNames(
                    size === Size.WIDE ? "max-w-2xl" : "max-w-md",
                    "pointer-events-auto w-screen"
                  )}
                >
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="children-lg font-medium children-gray-900">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white children-gray-400 hover:children-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setShowPanel(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// Setting default value for props
SidePanel.defaultProps = {
  size: Size.SMALL,
};
