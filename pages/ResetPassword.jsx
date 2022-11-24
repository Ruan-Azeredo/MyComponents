import Layout from "../components/Layout";

export default function ResetPassword() {
    return (
        <Layout>
            <body className="antialiased bg-slate-200 h-full w-full justify-center items-center flex rounded-3xl">
                <div className="max-w-lg mx-min my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                    <h1 className="text-4xl font-medium">Reset password</h1>
                    <p className="text-slate-500">Fill up the form  to reset the password</p>
                    <form action="" className="my-10">
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="email">
                                <p className="font-medium text-slate-700 pb-2">Email address</p>
                                <input type="text" placeholder="Enter email address" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" />
                            </label>
                            <button className="w-full py-3 font-medium text-white bg-indigo-600 rounded-lg border-indigo-400 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                                <span>Reset password</span>
                            </button>
                            <p className="text-center">
                                Not registered yet? <a href="" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </body>
        </Layout>
    )
}