import NewsList from "./components/NewsComponents/NewsList";

export default function News() {
  return (
    <>
      <main className="w-full bg-[url('src/assets/img/Hero/contents_top_bg01.jpg')] bg-cover bg-bottom h-auto flex justify-center mt-24 pb-36">
        <NewsList />
      </main>
    </>
  );
}
