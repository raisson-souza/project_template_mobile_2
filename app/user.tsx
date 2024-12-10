import { Link } from "expo-router"
import { Screen } from "@/components/base/Screen"
import AuthRoute from "@/components/auth/Auth"
import Box from "@/components/base/Box"
import TextBold from "@/components/base/TextBold"

export default function UserScreen() {
    return (
        <AuthRoute>
            <Screen>
                <Box.Column>
                    <TextBold>TELA DO USUÁRIO</TextBold>
                    <Link href={{ pathname: "/" }}>Home</Link>
                </Box.Column>
            </Screen>
        </AuthRoute>
    )
}