import { TextInput } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  typography,
  shadow,
  borderRadius,
} from 'styled-system';
import theme from '../../utils/theme';
const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999999',
}))(compose(color, size, space, typography, borderRadius, shadow));
export default Input;
