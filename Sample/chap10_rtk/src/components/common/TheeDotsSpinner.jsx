import { ThreeDots } from 'react-loader-spinner'

function LoadComp() {
  return (
    <div className="text-center py-5 d-flex justify-content-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#0d6efd"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default LoadComp;
