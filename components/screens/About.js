import React, { useRef, useState } from "react"
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import { candidateList } from "../hooks/candidateList";
import TinderCard from 'react-tinder-card'

export default function About() {
    const [lastDirection, setLastDirection] = useState()
    const [id, setID] = useState();
    const [showModal, setShowModal] = useState(false);
    const [candidateDetails, setcandidateDetails] = useState([]);
    const [selected, setSelected] = useState([]);

    const card = useRef(null);

    const swiped = (id) => {
        setID(id);
    }

    const outOfFrame = (id) => {
        setID(id);
    }

    const showDetails =  (id) => {
        setID(id);
        setShowModal(true);  
        const candidateDetails = candidateList.find((data) => {
            data.id == id;
        });
        setcandidateDetails(candidateDetails);
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, paddingHorizontal: 25, backgroundColor: '#282C34' }}>
                <StatusBar barStyle="light-content" />
                <View>

                    <View style={styles.container}>
                        <View style={styles.cardContainer}>
                            {candidateList.map((character) =>
                                <View key={character.name} style={{ position: 'relative' }}>
                                    <TinderCard onSwipe={(dir) => swiped(character.id)} onCardLeftScreen={() => outOfFrame(character.id)}>
                                        <View style={styles.card}>

                                            <Image card={card} source={character.photo} style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute', borderRadius: 15 }} />

                                            <View style={{ position: 'absolute', zIndex: 99, bottom: 0, backgroundColor: '#1a1a1a', width: '100%', paddingHorizontal: 15, paddingVertical: 15, borderRadius: 15 }}>
                                                <Text style={{ color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 20 }}>{character.name}</Text>
                                                <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 15 }}>{character.position}</Text>
                                                <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 15 }}>{character.location}</Text>

                                            </View>
                                        </View>

                                    </TinderCard>
                                    {character.name === character.name ?
                                        <TouchableOpacity onPress={() => { showDetails(character.id) }} style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#39BCDC', position: 'absolute', right: 15, width: 150, height: 50, borderRadius: 50, bottom: -100 }}>
                                            <Text style={{ color: '#383C44', fontFamily: 'Poppins-Medium' }}>View Details</Text>
                                        </TouchableOpacity>
                                        : ""

                                    }

                                </View>
                            )}
                        </View>

                        <Modal animationType="slide" visible={showModal} style={{ backgroundColor: '#282C34' }}>

                            <View style={{ flex: 1 }}>
                                <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#282C34', paddingHorizontal: 25 }}>
                                    <StatusBar barStyle="light-content" />
                                    <View style={{ backgroundColor: '#224261', width: 416, height: 416, justifyContent: 'center', alignItems: 'center', borderRadius: 300, position: 'absolute', top: -300, opacity: 0.2 }} />
                                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1 }}>
                                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>{candidateDetails ? candidateDetails.name : ""}</Text>
                                            <Text style={{ fontSize: 15, color: '#fff', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>{candidateDetails ? candidateDetails.position : ""}</Text>
                                            <Text style={{ fontSize: 15, color: '#fff', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>{candidateDetails ? candidateDetails.location : ""}</Text>

                                            <View>
                                                {candidateList.map((character) =>
                                                    <View key={character.name} style={{ position: 'relative' }}>
                                                        {character.exp.map((item) =>
                                                            <View key={item}>
                                                                <Text style={{ fontSize: 15, color: '#fff', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>{item.company}</Text>
                                                            </View>
                                                        )}
                                                    </View>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>
                        </Modal>
                    </View>

                </View>
            </SafeAreaView>
        </View>

    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header: {
        color: '#000',
        fontSize: 30,
        marginBottom: 30,
    },
    cardContainer: {
        width: '100%',
        maxWidth: '100%',
        height: 600,
    },
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: '100%',
        height: 600,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',

    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,

    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: '#fff',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}