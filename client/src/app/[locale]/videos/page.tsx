import ElectronicMedia from "@/components/videos/ElectronicMedia";
import OtherMedia from "@/components/videos/OtherMedia";
import RelatedContent from "@/components/videos/RelatedContent";

const page = () => {
    return (
        <main className="my-16 min-h-screen body-container">
            <OtherMedia />
            <br /><br />
            <RelatedContent />
            {/* <ElectronicMedia /> */}
        </main>
    )
};

export default page;
