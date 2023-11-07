import { TouchableOpacity} from 'react-native';
import { Header } from "react-native-elements";
import { ArrowLeft } from "react-native-feather";
import { useNavigation } from '@react-navigation/native';


const StandardHeader = () => {
    const navigation = useNavigation();
    return(
        <Header 
            backgroundColor = "off-white"   
            leftComponent={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft />
                </TouchableOpacity>
            }
        />
    );    
}
export default StandardHeader;