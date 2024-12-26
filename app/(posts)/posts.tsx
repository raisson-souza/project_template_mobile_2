import { Link } from "expo-router"
import { Screen } from "@/components/base/Screen"
import Box from "@/components/base/Box"
import TextBold from "@/components/base/TextBold"

export default function PostsScreen() {
    return (
        <Screen>
            <Box.Column>
                <TextBold>TELA DE POSTS</TextBold>
                <Link href={{ pathname: "/(posts)/[id]/post", params: { id: "1" }}}>Post 01</Link>
                <Link href={{ pathname: "/(posts)/[id]/post", params: { id: "2" }}}>Post 02</Link>
                <Link href={{ pathname: "/(posts)/[id]/post", params: { id: "3" }}}>Post 03</Link>
            </Box.Column>
        </Screen>
    )
}