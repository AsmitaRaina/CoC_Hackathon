import React from 'react';
import './Chat.css';
import  Chatbot from "react-simple-chatbot";
function Chat() {
    
    const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#42a5f5',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#6072e6', // Blue background for bot messages
    botFontColor: '#000000', // Black font color for bot messages
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
    
    const steps=[
    {
      id:'Greet',
      message:'Hello,welcome!',
      trigger:'Ask name'
    },
    {
      id:'Ask name',
      message:'Please enter your name',
      trigger:'waiting'
    },
    {
      id:'waiting',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi! ,{previousValue},select your issue',
      trigger:'issue'
    },
    {
      id:'issue',
      options:[{value:'Timings',label:'Timings', trigger:'Timings'},
    {value:'Mess',label:'Mess', trigger:'Mess'},
{value:'Rooms',label:'Rooms', trigger:'Rooms'},
{value:'Documents',label:'Documents', trigger:'Documents'}],

    },
    {
      id:'Timings',
      options:[{value:'Girls Hostel',label:'Girls Hostel', trigger:'Girls Hostel'},
    {value:'Boys Hostel',label:'Boys Hostel', trigger:'Boys Hostel'},
{value:'Visiting hours',label:'Visiting hours', trigger:'Visiting hours'}]
    },
    {
      id:'Girls Hostel',
      message:'In-time:10:00 pm',
      end:true
    },
    {
      id:'Boys Hostel',
      message:'In-time:12:00 pm',
      end:true
    },
    {
      id:'Visiting hours',
      message:'9:00-11:00 am',
      end:true
    },
    {
      id:'Mess',
      options:[
    {value:'Timetable',label:'Timetable', trigger:'Timetable'},
    {value:'Time',label:'Time', trigger:'Time'}
      ]
    },
    {
      id:'Timetable',
      component: (
        <div>
          <img
            src="https://res.cloudinary.com/dyxnmjtrg/image/upload/v1691847161/tt_uthe6e.jpg" // Replace with your image URL
            alt="Your Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ),
      end:true
    },
    {
      id:'Time',
      message:'Breakfast:7:30-9:00,Lunch:12:30-2:00,Dinner:7:30-9:00',
      end:true
    },
     {
      id:'Rooms',
      message:'In good condition',
      end:true
    },
    {
      id:'Documents',
      options:[{value:'Hostel form',label:'Hostel form', trigger:'Hostel form'},
    {value:'Undertaking',label:'Undertaking', trigger:'Undertaking'}]
    },
    {
      id:'Hostel form',
      component: (
        <div>
          <img
            src="https://res.cloudinary.com/dyxnmjtrg/image/upload/v1691847616/hostel_form_idufl7.png" // Replace with your image URL
            alt="Your Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ),
      end:true
    },
    {
      id:'Undertaking',
      component: (
        <div>
          <img
            src="https://res.cloudinary.com/dyxnmjtrg/image/upload/v1691847711/undertaking_ydrmks.png" // Replace with your image URL
            alt="Your Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ),
      end:true
    },
  ]
  return (
    <div className="chat">
      <Chatbot steps={steps} />
    </div>
  );
}
      
  
export default Chat
