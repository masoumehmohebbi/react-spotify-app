export default function Musics() {
  const playlistData = [
    {
      id: 1,
      imageSrc:
        "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      title: "عنوان آهنگ",
      desc: "توضیحات آهنگ در اینجا بیان میشود",
    },
    {
      id: 2,
      imageSrc:
        "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      title: "عنوان آهنگ",
      desc: "توضیحات آهنگ در اینجا بیان میشود",
    },
    {
      id: 3,
      imageSrc:
        "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      title: "عنوان آهنگ",
      desc: "توضیحات آهنگ در اینجا بیان میشود",
    },
    {
      id: 4,
      imageSrc:
        "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      title: "عنوان آهنگ",
      desc: "توضیحات آهنگ در اینجا بیان میشود",
    },
    {
      id: 5,
      imageSrc:
        "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      title: "عنوان آهنگ",
      desc: "توضیحات آهنگ در اینجا بیان میشود",
    },
    {
      id: 6,
      imageSrc:
        "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
      title: "عنوان آهنگ",
      desc: "توضیحات آهنگ در اینجا بیان میشود",
    },
  ];
  return (
    <>
      <h2 className="text-end text-secondary-0 p-4 tex-xl font-bold mb-4 ">
        نمایش تمام آهنگ های سایت
      </h2>
      <div className="grid grid-cols-4 gap-8 m-2">
        {playlistData.map((item) => (
          <div
            key={item.id}
            className="group w-48 md:w-auto bg-primary-500 hover:bg-primary-700 shadow-md rounded-md p-5 text-end"
          >
            <img className="rounded-md" src={item.imageSrc} />
            <h1 className="text-secondary-0">{item.title}</h1>
            <p className="text-secondary-50 text-sm">{item.desc}</p>
            <div className="flex items-center justify-around mt-4">
              <span className="bg-error text-secondary-0 py-1 px-4 rounded-full text-[14px] cursor-pointer">
                حذف
              </span>
              <span className="bg-success text-secondary-0 py-1 px-2 rounded-full  text-[14px] cursor-pointer">
                تغییر نقش
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
