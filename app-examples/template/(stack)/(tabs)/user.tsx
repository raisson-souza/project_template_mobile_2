import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Index() {
    return (
        <View style={{ gap: 15 }}>
            <Text>TELA DE USUÁRIO</Text>
            <Link href="/tabs">home</Link>
        </View>
    )
}