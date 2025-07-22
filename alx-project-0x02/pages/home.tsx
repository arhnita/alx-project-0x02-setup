import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Card title="Typescript" content="You can do anything you put your mind to" />
            <Card title="Next Js" content="All things work together for good" />
            <Card title="Hey There" content="I'm so glad i'm learning a lot" />
        </div>
    )
}

export default HomePage;