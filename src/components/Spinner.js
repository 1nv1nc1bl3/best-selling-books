import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '3rem auto',
        // borderColor: 'red',
    };

    return <ClipLoader loading={loading} cssOverride={override} size={150} />;
};

export default Spinner;
