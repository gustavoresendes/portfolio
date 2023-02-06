import Profile from "./components/Profile";
import Socials from "./components/Socials";
import ProjectsHeader from "./components/ProjectsHeader";
import FirstProjectExample from "./components/FirstProjectExample";
import SecondProjectExample from "./components/SecondProjectExample";
import RecentPostsHeader from "./components/RecentPostsHeader";
import PostExample from "./components/PostExample";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App bg-[#22212C] h-full w-full p-5">
      <section className=" text-[#837E9F] grid gap-7 grid-flow-col h-full">
        <aside className="grid grid-rows-3 gap-7">
          <Profile />
          <Socials />
          <Technologies />
        </aside>

        <main className="grid gap-7 grid-rows-5 grid-cols-2 h-screen w-full">
          <ProjectsHeader />
          <FirstProjectExample />
          <SecondProjectExample />
          <RecentPostsHeader />
          <PostExample />
        </main>
      </section>
    </div>
  );
}

export default App;
