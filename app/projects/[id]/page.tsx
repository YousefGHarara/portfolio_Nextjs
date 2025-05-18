
type Params = {
  id: string;
};

interface PageProps {
  params: Params;
}

const Page = ({ params } : PageProps) => {
  return <div>Hi, {params.id}</div>;
};

export default Page;

// ✅ هذا يجعل Next.js يتوقف عن محاولة التحقق من static params
export const dynamic = 'force-dynamic';
