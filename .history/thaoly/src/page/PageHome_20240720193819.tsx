import img7 from '../../public/img/img7.png'
import img7I from '../../public/img/img7.1.png'
import img7II from '../../public/img/thaoly.jpg'
const PageHome = () => {
  return (
    <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
      <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Lê Nhật Thảo Ly </p>
      <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ CỦA NƯỚC HOA  </h1>
      <img className="w-[1050px] h-[470px] m-auto" src={img7} alt="PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ CỦA NƯỚC HOA " />
      <i className='text-center text-[13px]'>PHhân biệt các loại nồng độ nước hoa </i>
      <i className='mx-9 my-3'>Có lẽ mọi người khi đã từng mua hoặc dùng nước hoa đều gặp phải tình trạng nhìn thấy các dòng chữ EAU DE PARFUM, EAU DE TOILETTE,...
        Tuy nhiên, không phải ai cũng hiểu rõ ràng về ý nghĩa của những dòng chữ này, điều này có thể gây ra sự bối rối.</i>
      <div className='mx-9'>
        <p className='text-[20px] font-[600]'>NỒNG ĐỘ NƯỚC HOA LÀ GÌ?</p>
        <div className='mx-5'>
          <p>Nồng độ trong nước hoa xác định lượng phân tử hương thơm hòa tan trong cồn.
            Nhiều người nhầm tưởng nước hoa chứa 100% tinh chất hương thơm, nhưng thực tế,
            chúng được pha trộn với cồn và hợp chất khác theo công thức nhất định.</p>
          <p>Một chai nước hoa là sự pha trộn giữa mùi hương (tinh chất, hợp chất thơm, dầu) và lớp nền (etanol, nước).
            Lớp nền làm loãng tinh dầu và giúp hương tỏa ra từ da, đồng thời cồn bảo quản các loại dầu dễ bay hơi và
            đảm bảo các thành phần hương thơm kết hợp đúng cách.</p>
        </div>
        <div className='text-center'>
          <img src={img7I} className='h-[500px] w-[1050px] mt-3' alt="TỔNG QUAN NỒNG ĐỘ CỦA NƯỚC HOA" />
          <i className='text-center text-[13px]'>Tổng quan nồng độ nước hoa</i>
        </div>
      </div>
      <div className='mx-9 mt-5 m'>
        <p className='text-[20px] font-[600]'>PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ NƯỚC HOA</p>
        <p className='mt-2 mb-7'>Tất cả các loại đều bắt đầu bằng chữ Eau, trong tiếng Pháp có nghĩa là “nước”, có 5 loại phổ biến sau:</p>
        <div className=''>
          <img className='h-[550px] w-[1050px]' src={img7II} alt="Phân biệt các loại nồng độ nước hoa" />
          <p className='text-center text-[13px] italic'>Phân biệt các loại nồng độ nước hoa</p>
          <div className='mx- mt-2'>
            <div>
              <p>Hy vọng với những thông tin CODEDECO mang lại sẽ giúp cho các bạn chọn được loại mùi hương có nồng độ phù hợp với bản thân nhất.</p>
            </div>
            <div>
              <p>Xem thêm: <a style={{textDecorationLine:'underline',fontSize:15, color:'blue'}} href="https://codedeco.art/7-nhom-huong-hoa-co-ban/?fbclid=IwZXh0bgNhZW0CMTAAAR3ILr7y4RI8STGuQyG-_kAtyI2loRPxGobqk0pgET_7vVu-CkXPLDpAOOk_aem_mNVeJrs28ulCmOsalx0EDQ">7 nhóm hương nước hoa cơ bản có thể bạn chưa biết</a></p>
              <p className='bg-black text-white p-3 w-[250px] rounded-md'><b>Hotline: 0967.077.882</b> </p>
              <p className='bg-black text-white p-3 w-[250px] rounded-md'><b>CSKH : 0383.226.567 </b> </p>
            </div>
            <div>
              <p className='text-[16px] font-[600]'>CODEDECO VIETNAM</p>
              <ul className='list-disc mx-5'>
                <li><b>Facebook:</b> <a style={{textDecorationLine:'underline',fontSize:15}} href="https://www.facebook.com/profile.php?id=61555159087139" target='_blank'>CODEDECO - SCENTS CODE FOR YOUR STYLE</a></li>
                <li><b>Instagram:</b> @codedeco.official</li>
                <li><b>Shopee:</b> https://shopee.vn/codedeco.official</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHome