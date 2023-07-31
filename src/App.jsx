import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender';
import SignupForm from './components/SignupForm/SignupForm';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter-4.2/Counter-4.2';
import Clock from './components/Clock/Clock';
import PokemonView from './views/PokemonView';
import Friends from './components/Friends';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <AppBar />

      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/pokemon" element={<PokemonView />} />
        <Route
          path="/skip-first-render"
          element={<SkipEffectOnFirstRender />}
        />
        <Route path="/counter-4.2" element={<Counter2 />} />
        <Route path="/notes" element={<Friends />} />

        {/* <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions} />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/clock">
          <Clock />
        </Route>

        <Route path="/pokemon">
          <PokemonView />
        </Route> */}
      </Routes>
    </div>
  );
}
