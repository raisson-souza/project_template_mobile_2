import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Screen } from "../components/base/Screen"
import { StackNavigationProp } from "@react-navigation/stack"
import { StyleSheet, Text } from "react-native"
import CustomButton from "../components/customs/CustomButton"
import React from "react"
import { StackNavigationParams, TabNavigationParams } from "@/app/_layout"

type HomeStackUseNavigationProps = StackNavigationProp<StackNavigationParams, "Tabs">
// type HomeStackUseRouteProps = RouteProp<StackNavigationParams, "Tabs">

type HomeTabUseNavigationProps = BottomTabNavigationProp<TabNavigationParams, "Home">
// type HomeTabUseRouteProps = RouteProp<TabNavigationParams, "Home">

/** Tela home */
export const Home: React.FC<{}> = ({ }) => {
    const stackNavigation = useNavigation<HomeStackUseNavigationProps>()
    const tabNavigation = useNavigation<HomeTabUseNavigationProps>()

    return (
        <Screen>
            <Text>Project Template Mobile</Text>
            <Text>HOME</Text>
            <CustomButton title="Tela de Detalhes" onPress={ () => stackNavigation.navigate("Detail", { info: "exemplo de navegação" } ) } />
        </Screen>
    )
}

const styles = StyleSheet.create({
})