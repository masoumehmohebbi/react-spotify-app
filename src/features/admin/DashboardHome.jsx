import DashboardHeader from "./DashboardHeader";

const DashboardHome = () => {
  const datas = [
    {
      id: 1,
      title: "Total Songs",
      count: 50,
      des: "hellow hellowhellowhellowhellowhellowhellow"

    },
    {
      id: 2,
      title: "Total Artists",
      count: 5
    },
    {
      id: 3,
      title: "Total Albums",
      count: 55,
      des: "hellow hellowhellowhellowhellowhellowhellow"

    },
    {
      id: 4,
      title: "Total Plays",
      count: 15
    },
    {
      id: 5,
      title: "Play in 24h",
      count: 5
    },
    {
      id: 6,
      title: "played today",
      count: 20
    },
    {
      id: 7,
      title: "Total Songs",
      count: 18
    },
    {
      id: 8,
      title: "played today",
      count: 20,
      des: "hellow hellowhellowhellowhellowhellowhellow"
    },
    {
      id: 9,
      title: "Total Songs",
      count: 13,
    },
    {
      id: 10,
      title: "Total Songs",
      count: 18
    },
    {
      id: 11,
      title: "played today",
      count: 20,
      des: "hellow hellowhellowhellowhellowhellowhellow"
    },
    {
      id: 12,
      title: "Total Songs",
      count: 13,
    },
  ]
  return (
    <>
      <DashboardHeader />
      <div className="text-white px-12">
        <h1 className="text-2xl font-bold my-6">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4 ">
          {
            datas.map(data => (
              <div key={data.id} className="transition hover:bg-primary-800 hover:shadow-[0px_0px_4px_1px_#f7fafc] rounded px-12 py-4  border bg-primary-700 flex flex-col items-start justify-center gap-4 break-all">
                <span>{data.title}</span>
                <span className="font-bold text-xl">{data.count}</span>
                <p className="text-[13px]">{data.des}</p>
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-3 gap-8 mt-24">
          <NewSongsTable />
          <NewAlbumsTable/>
          <NewArtistsTable/>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;

export const NewSongsTable = () => {
  return (
    <div className="text-white bg-primary-700">
      <h5 className="w-full px-4 py-2 bg-primary-500 text-xl">
        New 50 Songs
      </h5>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Soung Name</h5>
            <p className="text-sm">lorem about this soung lorem about this soung </p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Soung Name</h5>
            <p className="text-sm">lorem about this soung lorem about this soung</p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Soung Name</h5>
            <p className="text-sm">lorem about this soung lorem about this soung </p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Soung Name</h5>
            <p className="text-sm">lorem about this soung lorem about this soung</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export const NewAlbumsTable = () => {
  return (
    <div className="text-white bg-primary-700">
      <h5 className="w-full px-4 py-2 bg-primary-500 text-xl">
        New 50 Albums
      </h5>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Album Name</h5>
            <p className="text-sm">lorem about this Album lorem about this soung </p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Album Name</h5>
            <p className="text-sm">lorem about this Album lorem about this soung</p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Album Name</h5>
            <p className="text-sm">lorem about this Album lorem about this soung </p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Album Name</h5>
            <p className="text-sm">lorem about this Album lorem about this soung</p>
          </div>
        </li>
      </ul>
    </div>
  )
}


export const NewArtistsTable = () => {
  return (
    <div className="text-white bg-primary-700">
      <h5 className="w-full px-4 py-2 bg-primary-500 text-xl">
        New 50 Artists
      </h5>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Artist Name</h5>
            <p className="text-sm">lorem about this Artist lorem about this soung </p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Artist Name</h5>
            <p className="text-sm">lorem about this Artist lorem about this soung</p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Artist Name</h5>
            <p className="text-sm">lorem about this Artist lorem about this soung </p>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 border-b border-secondary-500 py-4">
          <div className=" ml-2 w-[60px] h-[60px] rounded-full bg-success"></div>
          <div className="flex flex-col gap-1 mr-1">
            <h5 className="font-bold">Artist Name</h5>
            <p className="text-sm">lorem about this Artist lorem about this soung</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
