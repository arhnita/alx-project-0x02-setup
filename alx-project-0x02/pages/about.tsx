import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white-800">About Page</h1>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Button Sizes
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              size="small"
              className=""
              onClick={() => alert("Small button clicked")}
            >
              Small Button
            </Button>
            <Button
              size="medium"
              className=""
              onClick={() => alert("medium button clicked")}
            >
              Medium Button
            </Button>
            <Button
              size="large"
              className=""
              onClick={() => alert("large button clicked")}
            >
              Large Button
            </Button>
          </div>
        </div>

        <div className="space-y-6 mt-4">
          <h2 className="text-xl font-semibold text-white mb-4 mt-4">
            Button Shapes
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              shape="rounded-sm"
              className=""
              onClick={() => alert("rounded small button clicked")}
            >
              Rounded Small Button
            </Button>
            <Button
              shape="rounded-md"
              className=""
              onClick={() => alert("rounded medium button clicked")}
            >
              Rounded Medium Button
            </Button>
            <Button
             shape="rounded-full"
              className=""
              onClick={() => alert("rounded large button clicked")}
            >
              Rounded Large Button
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
