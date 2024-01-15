import React from "react";
import SideNav from "../../components/Sidenav";
import TopNav from "../../components/Topnav";
import { NavLink } from "react-router-dom";

function Support() {
  return (
    <>
      <div className="flex bg-violet-100">
        <div className="hidden lg:flex">
          {" "}
          <SideNav />
        </div>
        <div className="w-full">
          <TopNav title="Support" />
          <div className="lg:flex lg:mx-12 pt-2">
            <div className="lg:w-2/4 p-3 m-1">
              <i className="bi bi-envelope-fill" style={{ "font-size": 40 }}></i>

              <h1 className="mt-3 font-bold text-2xl">Contact Us</h1>

              <p className="mt-2">
                Have a question or just want to know more?
                <br /> feel free to reach out to us.
              </p>
            </div>

            <div className="bg-pink-300 w-full m-1 rounded">
              <section className="bg-white rounded">
                <div className="py-8 px-4 mx-auto max-w-screen-md">
                  <form action="post" className="space-y-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="First Name"
                        />
                        
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="name@xyz.com"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        for="message"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        for="terms"
                        className="ml-2 text-sm font-medium text-black-300 dark:text-gray-500"
                      >
                        I agree with the{" "}
                        <NavLink
                          to="/"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          terms and conditions
                        </NavLink>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
