import Burger from './subcomponents/Burger';
import Logo from './subcomponents/Logo'; 
import Container from './subcomponents/Container';
import Menu from './subcomponents/MenuContainer'; 
import NavLink from './subcomponents/NavLink'; 
import ButtonContainer from './subcomponents/ButtonContainer';
import NavItemContainer from './subcomponents/NavItemContainer';
import BrandContainer from './subcomponents/BrandContainer';


interface propsInterface {
  user: string | null;
  token: string | null; 
  updateUser: (action: string) => void; 
}

function Navigation(props: propsInterface){
  
    const userLoggedIn = props.user?.length && props.token?.length ? true : false; 
  
  
    return <Container>

    <BrandContainer>
        <Logo />
        <Burger />
    </BrandContainer>

    <Menu>
      <NavItemContainer>
        <NavLink to="/" name="Home"/>
        <NavLink to="listings" name="Listings"/>
        <NavLink to="create" name="Create Listing"/>
      </NavItemContainer>

      <ButtonContainer userLoggedIn={userLoggedIn} updateUser={props.updateUser}/>
    </Menu>    
  
  </Container>
};

export default Navigation; 