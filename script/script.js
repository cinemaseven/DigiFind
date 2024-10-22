// FOR CAMERA SELECTION DISPLAY
const cameras = [
    // CAMERA SELECTION 1
    { name: 'Sony ZV-1', 
        price: '(PHP 39,999.00)', 
        description: "The Sony ZV-1 is a compact camera tailored for content creators and vloggers. It features a 20.1 MP sensor, 4K video recording, and a flip-out touchscreen for easy framing. Its fast autofocus and background defocus mode make it ideal for creating professional-looking videos on the go.", 
        image: 'images/cam-sonyZV1.png', 
        specs: 'https://www.dpreview.com/products/sony/compacts/sony_zv1/specifications', 
        link: 'https://www.henryscameraphoto.com/SONY-ZV-1-VLOG-CAMERA?srsltid=AfmBOorCcbIkqWf_SUZ9JUu4Yqwq0J5CU3eug-2slxxQeD7SVtl-rpGz' },
    { name: 'Sony A7 IV', 
        price: '(PHP 144,999.00)', 
        description: "This camera is a versatile full-frame mirrorless camera with a 33 MP sensor and 4K 60p video recording. It offers excellent autofocus performance and image stabilization, making it perfect for both photography and videography. The camera's advanced features and robust design cater to enthusiasts and professionals alike.", image: 'images/cam-sonyA7IV.png', 
        specs: 'https://www.dpreview.com/products/sony/slrs/sony_a7iv/specifications', 
        link: 'https://www.henryscameraphoto.com/Sony-A7M4-Kit?search=Sony%20A7%20IV'  },
    { name: 'Sony A6100', 
        price: '(PHP 37,999.00)', 
        description: "The Sony A6100 is an entry-level mirrorless camera with a 24.2 MP sensor and lightning-fast autofocus. It supports 4K video recording and continuous shooting at 11 fps, making it a great choice for capturing fast action. Its compact design and intuitive interface are ideal for beginners exploring photography and video.", 
        image: 'images/cam-sonyA6100.png', 
        specs: 'https://www.dpreview.com/products/sony/slrs/sony_a6100/specifications', 
        link: 'https://www.lazada.com.ph/products/sony-alpha-a6100-sony-alpha-a6100-mirrorless-digital-camera-with-16-50mm-lens-i1793595512.html'  },
    { name: 'Sony RX100 VII', 
        price: '(PHP 69,999.00)', 
        description: "A camera that combines a 20.1 MP sensor with a 24-200mm zoom lens in a pocket-sized body. It offers 4K video, fast autofocus, and burst shooting at 20 fps, perfect for travel and everyday shooting. Its compact size and professional-level features make it a favorite among advanced users.", 
        image: 'images/cam-sonyRX100VII.png', 
        specs: 'https://www.dpreview.com/products/sony/compacts/sony_dscrx100m7/specifications', 
        link: 'https://www.henryscameraphoto.com/SONY-DSC-RX100-M7-DIGITAL-CAMERA?search=Sony%20RX100%20VII'  },
    { name: 'Canon EOS R10', 
        price: '(PHP 37,598.00)', 
        description: "A compact, lightweight mirrorless camera with a 24.2 MP sensor and advanced Dual Pixel autofocus. It supports 4K video and fast continuous shooting, making it versatile for both photos and videos. Ideal for enthusiasts, it’s a modern all-rounder with excellent performance.", 
        image: 'images/cam-canonEOSR10.png', 
        specs: 'https://www.dpreview.com/products/canon/slrs/canon_eosr10/specifications', 
        link: 'https://www.henryscameraphoto.com/Canon-EOS-R100-1845mm?search=Canon%20EOS%20R10' },
    { name: 'Canon PowerShot SX740 HS', 
        price: '(PHP 30,999.00)', 
        description: "A camera perfect for travel photography, as it offers 40x optical zoom in a pocket-sized design. It captures 20.3 MP photos and 4K video, with built-in image stabilization for sharp, steady shots. Its compact body and powerful zoom make it ideal for capturing distant subjects on the go.", 
        image: 'images/cam-canonPowerShotSX740HS.png', 
        specs: 'https://www.dpreview.com/products/canon/compacts/canon_sx740hs/specifications', 
        link: 'https://www.kimstore.com/products/canon-powershot-sx740-hs?srsltid=AfmBOoodqG1dtg4O5Yez13l_n__k8pPTT6DRg8rgnxi_SC3gLxifxYky'  },
    { name: 'Canon IXUS 125 HS', 
        price: '(PHP 9,950.00)', 
        description: "The Canon IXUS 125 HS is a slim, stylish point-and-shoot camera with a 16.1 MP sensor and 5x optical zoom. Its compact design makes it easy to carry, while Full HD video recording adds versatility. Perfect for casual photographers, it offers great image quality in a simple, portable package.", 
        image: 'images/cam-canonIXUS125HS.png', 
        specs: 'https://www.dpreview.com/products/canon/compacts/canon_ixus125hs/specifications', 
        link: 'https://ph.priceme.com/Canon-IXUS-125-HS/p-886091076.aspx'  },
    { name: 'Canon EOS M200', 
        price: '(PHP 34,998.00)', 
        description: "A beginner-friendly mirrorless camera with a 24.1 MP sensor and Dual Pixel autofocus. It supports 4K video and features a flip-up touchscreen for easy selfies and vlogging. Compact and easy to use, it’s perfect for anyone starting their photography journey.", 
        image: 'images/cam-canonEOSM200.png', 
        specs: 'https://www.dpreview.com/products/canon/slrs/canon_eosm200/specifications', 
        link: 'https://tinyurl.com/484jxbsm'  },
    { name: 'Olympus SP-620 UZ', 
        price: '(PHP 9,250.00)', 
        description: "The Olympus SP-620 UZ is an affordable ultra-zoom camera with a 16 MP sensor and a 21x optical zoom lens. Its built-in image stabilization ensures sharp photos even at long distances. Ideal for travel or wildlife photography, it offers great zoom power in a compact body.", 
        image: 'images/cam-olympusSP620UZ.png', 
        specs: 'https://www.dpreview.com/products/Olympus/compacts/oly_sp620uz/specifications', 
        link: 'https://ph.priceme.com/Olympus-SP-620-UZ/p-886289820.aspx'  },

    // CAMERA SELECTION 2
    { name: 'Olympus OM-D E-M10 Mark IV', 
        price: '(PHP 41,690.00)', 
        description: "The Olympus OM-D E-M10 Mark IV is a lightweight, retro-styled mirrorless camera with a 20 MP sensor and 5-axis image stabilization. It supports 4K video and fast autofocus, making it versatile for both photography and videography. Perfect for enthusiasts, it combines style and performance in one package.", 
        image: 'images/cam-olympusOMDEM10MarkIV.png', 
        specs: 'https://www.dpreview.com/products/olympus/slrs/olympus_em10iv/specifications', 
        link: 'https://shopee.ph/Olympus-OM-D-E-M10-Mark-IV-Mirrorless-Camera-with-14-42mm-EZ-Lens-i.71919147.21532514947'  },
    { name: 'Olympus PEN E-PL10', 
        price: '(PHP 37,084.00)', 
        description: "A stylish, compact mirrorless camera with a 16 MP sensor and built-in image stabilization. It offers 4K video and a range of creative filters, perfect for lifestyle photography and social media. Its chic design and user-friendly features make it a great choice for casual photographers.", 
        image: 'images/cam-olympusPENEPL10.png', 
        specs: 'https://www.dpreview.com/products/olympus/slrs/oly_epl10/specifications', 
        link: 'https://www.lazada.com.ph/products/olympus-pen-e-pl10-mirrorless-digital-camera-i3944110964-s21173422494.html?'  },
    { name: 'Nikon D3500', 
        price: '(PHP 29,700.00)', 
        description: "An entry-level DSLR with a 24.2 MP sensor, known for its simplicity and excellent battery life. Its intuitive controls make it easy for beginners to master manual photography. With sharp image quality and a classic DSLR feel, it’s a perfect starting point for aspiring photographers.", 
        image: 'images/cam-nikonD3500.png', 
        specs: 'https://www.dpreview.com/products/nikon/slrs/nikon_d3500/specifications', 
        link: 'https://www.kimstore.com/products/nikon-d3500-kit-with-af-p-dx-nikkor-18-55mm-f-3-5-5-6g-vr?_pos=1&_sid=89eb85bb7&_ss=r'  },
    { name: 'Nikon COOLPIX A1000', 
        price: '(PHP 31,990.00)', 
        description: "The Nikon COOLPIX A1000 is a versatile compact camera with a 35x optical zoom and 4K video recording. It features a built-in electronic viewfinder and image stabilization, ideal for capturing distant subjects with ease. Perfect for travelers, it offers high-quality photos in a portable design.", 
        image: 'images/cam-nikonCOOLPIXA1000.png', 
        specs: 'https://www.dpreview.com/products/nikon/compacts/nikon_cpa1000/specifications', 
        link: 'https://shopee.ph/Nikon-Coolpix-A1000-Black-i.344726067.7368887558'  },
    { name: 'Leica D-Lux 8', 
        price: '(PHP 92,215.00)', 
        description: "This sleek, premium compact camera features a 17MP Micro Four Thirds sensor and a fast 24-75mm f/1.7-2.8 lens. It captures sharp, vibrant images and 4K video, with intuitive controls and Wi-Fi for easy sharing. Elegant and versatile, it's ideal for both casual and serious photographers.", 
        image: 'images/cam-leicaDLUX8.png', 
        specs: 'https://www.dpreview.com/products/leica/compacts/leica_dlux8/specifications', 
        link: 'https://ph.priceme.com/Leica-D-Lux-8/p-925437491.aspx'  },
    { name: 'Leica SL3', 
        price: '(PHP 438,400.00)', 
        description: "The Leica SL3 is a professional-grade full-frame mirrorless camera with a 47 MP sensor and stunning build quality. It supports 4K video, fast autofocus, and weather sealing, making it ideal for demanding photographers. Known for its precision, the SL3 is perfect for those seeking high-end performance.", 
        image: 'images/cam-leicaSL3.png', 
        specs: 'https://www.dpreview.com/products/leica/slrs/leica_sl3/specifications', 
        link: 'https://leica-store.ph/products/leica-sl3-black'  },
    { name: 'Fujifilm XF10', 
        price: '(PHP 19,990.00)', 
        description: "A compact, fixed-lens camera with a 24 MP APS-C sensor, delivering excellent image quality in a pocket-sized body. It features Fujifilm’s famous film simulations and 4K video, ideal for street and travel photography. Its simplicity and portability make it great for everyday use.", 
        image: 'images/cam-fujifilmXF10.png', 
        specs: 'https://www.dpreview.com/products/fujifilm/compacts/fujifilm_xf10/specifications', 
        link: 'https://jgsuperstore.com/products/fujifilm-xf-10-digital-camera-with-18-5mm-f-2-8-fixed-lens-champagne-gold?_pos=3&_sid=c8181deac&_ss=r'  },
    { name: 'Fujifilm X100VI', 
        price: '(PHP 103,990.00)', 
        description: "The Fujifilm X100VI offers a premium fixed-lens experience with its 26 MP sensor and hybrid viewfinder. Its classic design, coupled with modern features like 4K video and fast autofocus, makes it a favorite among enthusiasts. Perfect for street photographers who value image quality and portability.", 
        image: 'images/cam-fujifilmX100VI.png', 
        specs: 'https://www.dpreview.com/products/fujifilm/slrs/fujifilm_x100vi/specifications', 
        link: 'https://tinyurl.com/bdd68n2p'  },
    { name: 'Panasonic Lumix G100', 
        price: '(PHP 42,741.00)', 
        description: "a compact mirrorless camera designed for vloggers and content creators. It features a 20.3 MP sensor, 4K video, and advanced audio recording, making it perfect for on-the-go shooting. Its lightweight design and user-friendly interface make it a great option for video creators.", 
        image: 'images/cam-panasonicG100.png', 
        specs: 'https://www.dpreview.com/products/panasonic/slrs/panasonic_dcg100/specifications', 
        link: 'https://www.henryscameraphoto.com/Panasonic-G100-WithoutGrip?search=Panasonic%20Lumix%20G100'  },

    // CAMERA SELECTION 3
    { name: 'Panasonic Lumix S5 II', 
        price: '(PHP 147,241.00)', 
        description: "The Panasonic Lumix S5 II is a full-frame mirrorless camera offering 24 MP resolution and impressive video capabilities, including 6K recording. With its rugged build and fast autofocus, it’s ideal for both photographers and videographers. Its compact size and powerful features make it a standout choice for professionals.", 
        image: 'images/cam-panasonicS5II.png', 
        specs: 'https://www.dpreview.com/products/panasonic/slrs/panasonic_dcs5ii/specifications', 
        link: 'https://www.henryscameraphoto.com/Panasonic-Lumix-S5II-20-60mmKit?search=Panasonic%20Lumix%20S5%20II'  },
    { name: 'Panasonic Lumix DC-GF10', 
        price: '(PHP 26,991.00)', 
        description: "This camera is a stylish, entry-level mirrorless camera with a 16 MP sensor and 4K video recording. Its flip-up touchscreen and lightweight design make it perfect for selfies and vlogging. Ideal for beginners, it offers great image quality in a compact, easy-to-use package.", 
        image: 'images/cam-panasonicLumixDCGF10.png', 
        specs: 'https://www.dpreview.com/products/panasonic/slrs/panasonic_dcgf10/specifications', 
        link: 'https://jgsuperstore.com/products/panasonic-dc-gf10kga-lumix-g-with-lumix-g-x-vario-12-32mm-mirrorless-camera-gf10k-1?_pos=4&_sid=92cb61495&_ss=r'  },
    { name: 'Kodak Ektar H35N', 
        price: '(PHP 3,499.00)', 
        description: "A retro-inspired film camera that brings back the simplicity of analog photography. With its 35mm format and easy operation, it’s perfect for capturing nostalgic, film-quality shots. A great choice for those who love the classic look and feel of film photography.", 
        image: 'images/cam-kodakEKTARH35N.png', 
        specs: 'https://photobee.com.au/shop/kodak-ektar-h35n-half-frame-film-camera/462ece30-6c98-013c-5794-00163e90e196?variation=3640567', 
        link: 'https://tinyurl.com/46rwycp3'  },
    { name: 'Kodak PIXPRO FZ55', 
        price: '(PHP 11,999.00)', 
        description: "A budget-friendly point-and-shoot camera with a 16 MP sensor and 5x optical zoom. It’s compact, easy to use, and perfect for everyday snapshots. With 1080p video recording, it offers solid performance for casual photography at an affordable price.", 
        image: 'images/cam-kodakPIXPROFZ55.png', 
        specs: 'https://cameradecision.com/specs/Kodak-Pixpro-FZ55', 
        link: 'https://tinyurl.com/utey5n7z'  },
    { name: 'Ricoh G900 II', 
        price: '(PHP 42,791.00)', 
        description: "The Ricoh G900 II is a rugged, waterproof camera built for tough environments. It features a 20 MP sensor and 4K video recording, making it ideal for outdoor and industrial use. Its durable design and advanced features make it perfect for those needing a camera that can withstand extreme conditions.", 
        image: 'images/cam-ricohG900II.png', 
        specs: 'https://www.dpreview.com/products/ricoh/compacts/ricoh_g900ii/specifications', 
        link: 'https://tinyurl.com/mdvvmrpk'  },
    { name: 'Ricoh GR IIIx', 
        price: '(PHP 81,990.00)', 
        description: "The Ricoh GR IIIx is a street photographer's companion. Compact and powerful, it fits in your pocket but delivers stunning 24.2MP images with its sharp 40mm lens. Built to last and easy to use, it captures life’s moments effortlessly, even in low light. Plus, with built-in Wi-Fi, sharing your shots is a breeze.", 
        image: 'images/cam-ricohGRIIIx.png', 
        specs: 'https://www.dpreview.com/products/ricoh/compacts/ricoh_griiix/specifications', 
        link: 'https://www.henryscameraphoto.com/Ricoh-GR-IIIx-HDF?search=Ricoh%20GR%20IIIx'  },
    { name: 'OM System Tough TG-7', 
        price: '(PHP 29,999.00)', 
        description: "The OM System Tough TG-7 is a rugged waterproof camera designed for adventure enthusiasts. It features a 12 MP sensor, 4K video, and extreme durability, withstanding shocks, freezing temperatures, and submersion. Ideal for outdoor explorers, it delivers reliable performance in the toughest conditions.", 
        image: 'images/cam-omSystemToughTG7.png', 
        specs: 'https://www.dpreview.com/products/olympus/compacts/omsystem_tg7/specifications', 
        link: 'https://tinyurl.com/5cbc2faj'  },
    { name: 'Samsung DV300F', 
        price: '(PHP 7,850.00)', 
        description: "This compact digital camera offers a 16.1MP sensor and 5x optical zoom. With a unique front display for easy self-portraits and Wi-Fi connectivity for quick sharing, it's perfect for everyday photography.", 
        image: 'images/cam-samsungDV300F.png', 
        specs: 'https://www.dpreview.com/products/samsung/compacts/samsung_dv300f/specifications', 
        link: 'https://ph.priceme.com/Samsung-DV300F/p-886280352.aspx'  },
    { name: 'Akaso Brave 7 LE', 
        id: 'akasoBrave7LE',
        price: '(PHP 9,999.00)', 
        description: "One of the most budget-friendly action camera with dual screens and 4K video recording. It’s waterproof and built for adventure, making it ideal for capturing outdoor sports and activities. With its compact size and affordable price, it’s perfect for those looking to document their adventures without breaking the bank.", 
        image: 'images/cam-akasoBrave7LE.png', 
        specs: 'https://camerahaus.com/products/sed310920', 
        link: 'https://camerahaus.com/collections/akaso/products/sed310920'  },
];

const camerasPerPage = 9;
let currentPage = 0;

function displayCameras(page) {
    const cameraSelection = document.getElementById('camera-selection');
    cameraSelection.innerHTML = '';

    const start = page * camerasPerPage;
    const end = start + camerasPerPage;
    const camerasToDisplay = cameras.slice(start, end);

    camerasToDisplay.forEach(camera => {
        const cameraItem = `
            <div class="camera-item">
                <img src="${camera.image}" alt="${camera.name}">
                <div class="camera-text">
                    <h2>${camera.name}</h2>
                    <p id="price">${camera.price}</p>
                    <p>${camera.description}</p>
                    <div class="camera-links">
                        <a href="${camera.specs}" target="_blank">
                            <p>Specifications</p>
                        </a>
                        <p>|</p>
                        <a href="${camera.link}" target="_blank">
                            <p>Buy here</p>
                        </a>
                    </div>
                </div>
            </div>
    `;
        cameraSelection.innerHTML += cameraItem;
    });

    updateDots(page);
}

function nextPage() {
    const maxPage = Math.floor((cameras.length - 1) / camerasPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        displayCameras(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayCameras(currentPage);
    }
}

function goToPage(page) {
    currentPage = page;
    displayCameras(currentPage);
}

function updateDots(page) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === page);
    });
}

displayCameras(0);

// FOR HAMBURGER MENU
function hamburger(){
    var menu = document.getElementById("menu");
    var logo = document.getElementById("digifind-logo");
    var hamburgerIcon = document.querySelector('.menu-icon');

    if (menu.style.display === "none" && logo.style.display === "block"){ 
        menu.style.display = "block";
        menu.style.zIndex = "100"
        menu.style.backgroundColor = "#008080"
        logo.style.display = "none";
        hamburgerIcon.style.display = "none";

        document.addEventListener('click', outsideClickListener);
    } else {
        menu.style.display = "none";
        logo.style.display = "block";
        hamburgerIcon.style.display = "block";
        
        document.addEventListener('click', outsideClickListener);
    }
}

function outsideClickListener(event) {
    var menu = document.getElementById("menu");
    var logo = document.getElementById("digifind-logo");
    var hamburgerIcon = document.querySelector('.menu-icon');

    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        menu.style.display = "none";
        logo.style.display = "block";
        hamburgerIcon.style.display = "block";
        document.removeEventListener('click', outsideClickListener);  
    }
}