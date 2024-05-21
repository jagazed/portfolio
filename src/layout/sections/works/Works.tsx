import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import project1Image from '../../../assets/images/Project-1.webp'
import project2Image from '../../../assets/images/Project-2.webp'
import project3Image from '../../../assets/images/Project-3.webp'
import project4Image from '../../../assets/images/Project-4.webp'
import project5Image from '../../../assets/images/Project-5.webp'
import project6Image from '../../../assets/images/Project-6.webp'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

//const tabsItems = ["All", "Landing page", "React", "Spa"]

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]

const worksData = [
    {
        title: "My first react project",
        src: project1Image,
        text: "This is sample project description random things are here in description This is sample project lorem" +
            " ipsum generator for dummy content",
        stack: "HTML, JavaScript, React",
        type: "all",
        linkPreview: "http://localhost:3000/",
        linkCode: "http://localhost:3000/"
    },
    {
        title: "It-incubator training started with this project",
        src: project2Image,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, React",
        type: "all",
        linkPreview: "http://localhost:3000/",
        linkCode: "http://localhost:3000/"
    },
    {
        title: "Project Tile goes here",
        src: project3Image,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, React",
        type: "landing",
        linkPreview: "http://localhost:3000/",
        linkCode: "http://localhost:3000/"
    },
    {
        title: "Project Tile goes here",
        src: project4Image,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, React",
        type: "react",
        linkPreview: "http://localhost:3000/",
        linkCode: "http://localhost:3000/"
    },
    {
        title: "Project Tile goes here",
        src: project5Image,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, React",
        type: "spa",
        linkPreview: "http://localhost:3000/",
        linkCode: "http://localhost:3000/"
    },
    {
        title: "Project Tile goes here",
        src: project6Image,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML, JavaScript, React",
        type: "landing",
        linkPreview: "http://localhost:3000/",
        linkCode: "http://localhost:3000/"
    },
]
export const Works: React.FC = () => {
    const [currentFilterStarus, setCurrentFilterStarus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStarus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStarus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStarus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStarus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStarus={currentFilterStarus}/>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} align={"flex-start"}>
                    {filteredWorks.map((w, index)=> {
                        return <Work title={w.title} key={index}
                                     src={w.src}
                                     text={w.text}
                                     stack={w.stack}
                                     linkLivePreview={w.linkPreview}
                                     linkViewCode={w.linkCode}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

