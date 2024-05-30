export default function Post({ params }: { params: { id: string } }) {
    return <>{params.id}</>
}