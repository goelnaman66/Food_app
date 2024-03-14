import React from 'react';
class UserClass extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "1234",
                avatar_url: "",
                company: "",
                email:""
            },
        };

        console.log("Constructor");
    }

    //like useEffect
    // useeffect(()=>{
        //API Call
    //}, [])
    // Render component -> API Call -> get the data from API.
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/"+this.props.userId)
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render(){
        console.log("Render");
        const {userId} = this.props;
        const {name, location, avatar_url, company, email} = this.state.userInfo;
        return (
            <div className='border border-gray-100 flex flex-row flex-wrap justify-around p-5 m-5 w-2/5 bg-gray-100 rounded-lg'>
                <img src={avatar_url} alt="image" className='rounded-full h-40'/>
                <div>
                    <h1 className='text-lg font-bold mb-5'>{name}</h1>
                    <p>{location}</p>
                    <p>{company}</p>
                </div>
                <div>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default UserClass;