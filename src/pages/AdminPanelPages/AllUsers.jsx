

export default function AllUsers() {
    const users = [
        {
            id: 1,
            name: "Ali Ahmadi",
            username: "AliAhmadi-1313",
            password: "12121300",
            phone: "09908545848",
            role: "کاربر"
        },
        {
            id: 2,
            name: "zahra barzi",
            username: "zb1853",
            password: "898989",
            phone: "09908545848",
            role: "کاربر"
        },
    ]
    return (
        <>
            <h2 className="text-end p-4 tex-xl font-bold mb-4 ">
                نمایش تمام کاربر های سایت
            </h2>
            <div className="flex items-center justify-center w-full p-2">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-secondary-0">
                            <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">عملیات</th>
                            <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">نام</th>
                            <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">شماره تماس</th>
                            <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">نام کاربری</th>
                            <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">رمزعبور</th>
                            <th className="w-1/4 py-4 px-6 text-center text-gray-600 font-bold uppercase">نقش</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.map(user => (
                                <tr>
                                    <td className="py-4 text-center px-6 border-b border-primary-200 flex items-center gap-2">
                                        <span className="bg-red-600 text-white py-1 px-2 rounded-full text-[14px] cursor-pointer">حذف</span>
                                        <span className="bg-green-600 text-white py-1 px-2 rounded-full  text-[14px] cursor-pointer">تغییر نقش</span>
                                    </td>
                                    <td className="py-4 text-center px-6 border-b border-primary-200">{user.name}</td>
                                    <td className="py-4 text-center px-6 border-b border-primary-200">{user.phone}</td>
                                    <td className="py-4 text-center px-6 border-b border-primary-200 truncate">{user.username}</td>
                                    <td className="py-4 text-center px-6 border-b border-primary-200">{user.password}</td>
                                    <td className="py-4 text-center px-6 border-b border-primary-200">{user.role}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}