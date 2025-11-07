
// props.children is used for passing jsx as props.

function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}  //no datatype is under curlybraces
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button> {/*this is passed as children in props*/}
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard(props){
    return(
        <>
        <h2> Name : {props.name}</h2>
        <p>age: {props.age}</p>
        {props.greeting}
        <div>{props.children}</div>
        </>
    );
};