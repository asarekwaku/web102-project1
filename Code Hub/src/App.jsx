import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
       <div className="header">
      <h1>Community Tech Board</h1>
      <img src="https://img.icons8.com/?size=100&id=zdsaoHlE_aQY&format=png&color=000000" alt='community-icon'></img>
    </div>
    <div className="learn">
      <h1>Learn a Programming Language</h1>
      <div className="cards">
      <Card image ={"https://img.icons8.com/?size=100&id=hGdCwhSHUe6L&format=png&color=000000"} alt ="python-icon"title= "Learn Programming Language" description ="Python" link = {'https://try.codecademy.com/learn-python-3?g_network=g&g_productchannel=&g_adid=624951457897&g_locinterest=&g_keyword=free%20python%20course&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-42522089919&g_ifcreative=&g_campaign=account&g_locphysical=1027027&g_adgroupid=102526215538&g_productid=&g_source=%7Bsourceid%7D&g_merchantid=&g_placement=&g_partition=&g_campaignid=10030170703&g_ifproduct=&utm_id=t_kwd-42522089919:ag_102526215538:cp_10030170703:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=free%20python%20course&utm_campaign=US_Language:_Basic_-_Exact&utm_content=624951457897&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gbraid=0AAAAAon8KZEV1Hx0L99z_ngWPD4tTVzSk&gclid=EAIaIQobChMI26Hq9PrZiAMVr15HAR2ADRMDEAAYAiAAEgKYg_D_BwE'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000"} alt ="java-icon"title= "Learn Programming Language" description ="Java" link={'https://www.udemy.com/course/java-tutorial/'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=40670&format=png&color=000000"} alt ="c-icon"title= "Learn Programming Language" description ="C" link ={' https://www.learn-c.org/ '} ></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=40669&format=png&color=000000"} alt ="c++-icon"title= "Learn Programming Language" description ="C++" link={'https://www.scaler.com/topics/course/cpp-beginners/'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=24465&format=png&color=000000"} alt ="swift-icon"title= "Learn Programming Language" description ="Swift" link={'https://www.hackingwithswift.com/100/swiftui'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"} alt ="javascript-icon"title= "Learn Programming Language" description ="Javascript"></Card> 
      </div>
    </div>
    <div className="practice">
      <h1>Practice Coding</h1>
      <div className="cards">
      <Card image ={"https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000"} alt ="leetcode-icon"title= "Practice Coding" description ="Leetcode" link ={'https://leetcode.com/problemset/'} ></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=OUPsEPLKIebZ&format=png&color=000000"} alt ="hackerrank-icon"title= "Practice Coding" description ="Hackerrank" link={'https://www.hackerrank.com/about-us/home/'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=bY5t0noHcfXn&format=png&color=000000"} alt ="neetcode-icon"title= "Practice Coding" description ="Neetcode" link={'https://neetcode.io/problems/'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=gDJDJJ1MCGmG&format=png&color=000000"} alt ="codewars-icon"title= "Practice Coding" description ="Codewars" link={'https://www.codewars.com'}></Card> 
    
      </div>
    </div>
    <div className="resources">
      <h1>Resources</h1>
      <div className="cards">
      <Card image ={"https://placehold.co/600x400"} alt ="leetcode-icon"title= "Resources" description ="CodePath" link ={'https://www.codepath.org/about'} ></Card>
      <Card image ={"https://placehold.co/600x400"} alt ="hackerrank-icon"title= "Resources" description ="ColorStack" link={'https://www.colorstack.org/about-us'}></Card>
      <Card image ={"https://placehold.co/600x400"} alt ="neetcode-icon"title= "Resources" description ="NSBE" link={'https://nsbe.org/home/about/'}></Card>
      <Card image ={"https://img.icons8.com/?size=100&id=rhqG5aD2_6pw&format=png&color=000000"} alt ="youtube-icon"title= "Resources" description ="Youtube" link={'https://www.youtube.com/@thenewboston'}></Card> 
      </div>
    </div>
    </>
  )
}

export default App
