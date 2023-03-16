
import React from 'react';
import { useWindowDimensions,ScrollView ,TouchableOpacity,Button,Alert} from 'react-native';
import RenderHtml from 'react-native-render-html';
import AddButton from '../components/AddButton';
// import * as Print from 'expo-print';
// import { shareAsync } from 'expo-sharing';

const htm=()=>{
  return(
    `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
      <div id="box">
          <div id="box3">
              <p><b>Contact No.:</b> 8868033184</p> 
              <p><b>E-mail:</b> rajputnaman1511@gmail.com</p>
              <p><b>Address:</b> Durga Vihar Colony, Nagina Road, Dhamput, Bijnor, Uttar Pradesh</p>
              <p><b>LinkedIn Id.:</b> www.linkedin.com/in/naman-rajput-842373196</p><hr>
              <h4>Technical Skills</h4>
              <li>PYTHON</li>
              <li>C++</li>
              <li>FRONTEND(HTML, CSS, JAVASCRIPT)</li><hr>
              <h4>Non-Technical Skills</h4>
              <li>Communication</li>
              <li>Team Spirit</li><hr>
              <h4>References</h4>
              <li>Mrs.Monika- 999887****</li>
              
          </div>
      <div id="box2">
      <h2><b>NAMAN RAJPUT</b></h2>
      <h3>Objective</h3>
      <p>Applying for the post of Junior Engineer to contribute in the growth of your organization.
      </p><hr>
      <h3>Qualifications</h3>
      <li>B.tech from IMSEC, Ghaziabad</li>
      <li>12th from SHIKHAR SHISHU SADAN, Dhampur</li>
      <li>10th from PUSHP NIKETAN SCHOOL, Dhampur</li>
      <hr>
      <h3>Work Experience</h3>
      <li>Intern from YBI Foundation <ul>Two moths online internship in Artificial Intelligence and Machine Learning and a project</ul></li>
      <hr>
      <h3>Project Undertaken</h3>
      <li>Create an Application "RESUME BUILDER" with Team in 3rd year.</li>
      <li>Create a program "STUDENT MANAGEMENT" using C language in 2nd year.</li>
      <hr>
      <h3>Miscelleneous Activities</h3>
      <li>Took part in Hackathon in 2nd year and got 1st rank.</li>
      <li>Helped an organization for online voting in Delhi.</li>
      <li>Took part in AAGHAZ and got 3rd position at school level.</li>
      <hr>
      <h3>Extra Curricular Activities</h3>
      <li>Participated in Inter-School Debate Competition.</li>
      <li>One time Runner up and One time winner in Basketball Tournament at School level.</li><hr>
      <h3>Hobbies</h3>
      <li>Spending time with Friends</li>
      <li>Playing online and physical Games</li>
      <li>Reading</li>
      
  </div>
  
  </div>
  </body>
  </html>`
  );
}

const source = {
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
      <div id="box">
          <div id="box3">
              <p><b>Contact No.:</b> 8868033184</p> 
              <p><b>E-mail:</b> rajputnaman1511@gmail.com</p>
              <p><b>Address:</b> Durga Vihar Colony, Nagina Road, Dhamput, Bijnor, Uttar Pradesh</p>
              <p><b>LinkedIn Id.:</b> www.linkedin.com/in/naman-rajput-842373196</p><hr>
              <h4>Technical Skills</h4>
              <li>PYTHON</li>
              <li>C++</li>
              <li>FRONTEND(HTML, CSS, JAVASCRIPT)</li><hr>
              <h4>Non-Technical Skills</h4>
              <li>Communication</li>
              <li>Team Spirit</li><hr>
              <h4>References</h4>
              <li>Mrs.Monika- 999887****</li>
              
          </div>
      <div id="box2">
      <h2><b>NAMAN RAJPUT</b></h2>
      <h3>Objective</h3>
      <p>Applying for the post of Junior Engineer to contribute in the growth of your organization.
      </p><hr>
      <h3>Qualifications</h3>
      <li>B.tech from IMSEC, Ghaziabad</li>
      <li>12th from SHIKHAR SHISHU SADAN, Dhampur</li>
      <li>10th from PUSHP NIKETAN SCHOOL, Dhampur</li>
      <hr>
      <h3>Work Experience</h3>
      <li>Intern from YBI Foundation <ul>Two moths online internship in Artificial Intelligence and Machine Learning and a project</ul></li>
      <hr>
      <h3>Project Undertaken</h3>
      <li>Create an Application "RESUME BUILDER" with Team in 3rd year.</li>
      <li>Create a program "STUDENT MANAGEMENT" using C language in 2nd year.</li>
      <hr>
      <h3>Miscelleneous Activities</h3>
      <li>Took part in Hackathon in 2nd year and got 1st rank.</li>
      <li>Helped an organization for online voting in Delhi.</li>
      <li>Took part in AAGHAZ and got 3rd position at school level.</li>
      <hr>
      <h3>Extra Curricular Activities</h3>
      <li>Participated in Inter-School Debate Competition.</li>
      <li>One time Runner up and One time winner in Basketball Tournament at School level.</li><hr>
      <h3>Hobbies</h3>
      <li>Spending time with Friends</li>
      <li>Playing online and physical Games</li>
      <li>Reading</li>
      
  </div>
  
  </div>
  </body>
  </html>`
};
const tagsStyles={
  h3:{
    color:"#954EF8",
  }
}
const idsStyles={
  box:{
    
    display:"flex",
    flexDirection:"row",
    
},
box2:{
    width: "60%",
    paddingLeft: "10px",
},
box3:{
    paddingLeft:"5px",
    borderColor:"blue",
    backgroundColor:"#284f8f",
    paddingRight: "5px",
    width:"40%",
    color:"#dbe9f4"
}

}

const func= ()=>{
  // On iOS/android prints the given html. On web prints the HTML from the current page.
 let a=htm();
  try{
    const { uri } =  Print.printToFileAsync({
      a
    });
    console.log('File has been saved to:', uri);
     shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }catch(err){
    Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
}
Alert.alert("resume created")

}


export default function LastPage() {
  const { width } = useWindowDimensions();
  return (
    <ScrollView>
      <RenderHtml
        contentWidth={width}
      idsStyles={idsStyles}
      tagsStyles={tagsStyles}
        source={source}/>
        <Button 
        title="DOWNLOAD"
        onPress={func}
        /> 
      
    </ScrollView>

  );

}
