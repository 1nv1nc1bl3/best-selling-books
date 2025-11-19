import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '3rem auto',
    };

    return (
        // 3rd-party loader component
        <ClipLoader loading={loading} cssOverride={override} size={150} />
    );
};

export default Spinner;
