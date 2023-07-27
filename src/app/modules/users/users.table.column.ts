import {
  AddressSelectorTypes,
  ColumnType,
  OPTION_DATA_TYPE,
  OPTIONS_GENDER,
  OPTIONS_LANGUAGE,
  TableColum
} from '@viettel-vss-base/vss-ui';

export const usersTableColumn: TableColum[] = [
  {
    id: 1,
    name: 'index',
    fixedColumn: false,
    attr: 'STT',
    type: ColumnType.TEXT,
    width: '70px',
    isFilter: false,
    hiddenResize: false,
  },
  {
    id: 2,
    name: 'fullName',
    fixedColumn: true,
    attr: 'Tên khách hàng',
    type: ColumnType.TEXT,
    maxlength: 100,
    width: '150px',
    isFilter: true,
    hiddenResize: false,
    isSort: true,
  },
  {
    id: 3,
    name: 'extraNames',
    fixedColumn: false,
    attr: 'Tên phụ',
    maxlength: 100,
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false,
    isSort: true,
    filter: {name: 'extraName'}
  },
  {
    id: 4,
    name: 'telNumber',
    fixedColumn: true,
    maxlength: 100,
    attr: 'Số điện thoại',
    type: ColumnType.INT,
    options: [],
    width: '150px',
    isFilter: true,
    hiddenResize: false,
    isSort: true,
    filter:{type: ColumnType.INT, maxLength: 10}
  },
  {
    id: 5,
    name: 'extraTelNumbers',
    fixedColumn: false,
    attr: 'Số điện thoại phụ',
    type: ColumnType.INT,
    maxlength: 100,
    width: '150px',
    isFilter: true,
    hiddenResize: false,
    isSort: true,
    filter: {name: 'extraTelNumber', type: ColumnType.INT, maxLength: 10}
  },
  {
    id: 6,
    name: 'email',
    fixedColumn: false,
    attr: 'Email',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    checked: false,
    isSort: true,
    hiddenResize: false
  },
  {
    id: 7,
    name: 'extraEmails',
    fixedColumn: false,
    attr: 'Email phụ',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false,
    isSort: true,
    filter: {name: 'extraEmail'}
  },
  {
    id: 66,
    name: 'cusBusinessType',
    fixedColumn: false,
    attr: 'Kiểu khách hàng',
    type: ColumnType.TAG,
    options: [
      {value: 1, label: "Doanh nghiệp", color: '#006dff'},{value: 0, label: "Cá nhân", color: '#667085'}
    ],
    width: '150px',
    isFilter: true,
    hiddenResize: false,
    isSort: true,
    filter: {options: [{value: 1, label: "Doanh nghiệp"},{value: 0, label: "Cá nhân"} ], type: ColumnType.SELECT}
  },
  {
    id: 19,
    name: 'gender',
    fixedColumn: false,
    attr: 'Giới tính',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false,
    isSort: true,
    filter: {options: OPTIONS_GENDER, type: ColumnType.SELECT}
  },
  {
    id: 20,
    name: 'birthDay',
    fixedColumn: false,
    attr: 'Ngày sinh',
    type: ColumnType.TEXT_CENTER,
    width: '150px',
    isFilter: true,
    checked: false,
    isSort: true,
    filter: {type: ColumnType.DATE_RANGE_PICKER}
  },
  {
    id: 21,
    name: 'cusTypeDefine',
    fixedColumn: false,
    attr: 'Phân loại',
    type: ColumnType.TAG,
    width: '150px',
    options: OPTION_DATA_TYPE,
    isSort: true,
    isFilter: true,
    filter: {options: OPTION_DATA_TYPE,type: ColumnType.SELECT}
  },
  {
    id: 22,
    name: 'language',
    fixedColumn: false,
    attr: 'Ngôn ngữ chính',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    checked: false,
    isSort: true,
    hiddenResize: false,
    filter: {options: OPTIONS_LANGUAGE, type: ColumnType.SELECT}
  },
  {
    id: 23,
    name: 'identificationNumber',
    fixedColumn: false,
    attr: 'CCCD/CMTND',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    checked: false,
    isSort: true,
    hiddenResize: false,
    filter:{type: ColumnType.INT, maxLength: 256}
  },
  {
    id: 45,
    name: 'passportCode',
    fixedColumn: false,
    attr: 'Hộ chiếu',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false,
  },
  {
    id: 24,
    name: 'organization',
    fixedColumn: false,
    attr: 'Công ty/Doanh nghiệp',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 25,
    name: 'taxCode',
    fixedColumn: false,
    attr: 'Mã số thuế',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 26,
    name: 'job',
    fixedColumn: false,
    attr: 'Nghề nghiệp',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 27,
    name: 'representativeName',
    fixedColumn: false,
    attr: 'Tên người đại diện',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 28,
    name: 'representativePhone',
    fixedColumn: false,
    attr: 'SĐT người đại diện',
    type: ColumnType.INT,
    width: '150px',
    isFilter: true,
    checked: false,
    isSort: true,
    hiddenResize: false,
    filter:{type: ColumnType.INT, maxLength: 10}
  },
  {
    id: 29,
    name: 'representativeAddress',
    fixedColumn: false,
    attr: 'Địa chỉ người đại diện',
    type: ColumnType.TEXT,
    width: '150px',
    isSort: true,
    isFilter: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 30,
    name: 'facebookId',
    fixedColumn: false,
    attr: 'Tài khoản FB',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 31,
    name: 'zaloId',
    fixedColumn: false,
    attr: 'Tài khoản Zalo',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 32,
    name: 'tiktokId',
    fixedColumn: false,
    attr: 'Tài khoản Tiktok',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 33,
    name: 'instagramId',
    fixedColumn: false,
    attr: 'Tài khoản Instagram',
    type: ColumnType.TEXT,
    width: '150px',
    isFilter: true,
    isSort: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 8,
    name: 'customerAddress',
    fixedColumn: false,
    attr: 'Địa chỉ khách hàng',
    type: ColumnType.TEXT,
    // width: '750px',
    hiddenResize: true,
    checked: false,
    children: [
      {
        id: 80001,
        name: 'customer_address.country.country_name',
        fixedColumn: false,
        attr: 'Quốc gia',
        type: ColumnType.TEXT,
        width: '150px',
        isFilter: true,
        hiddenTitle: true,
        isSort: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.country,
          name: 'countryCustomerId',
        }
      },
      {
        id: 80002,
        name: 'customer_address.province.province_name',
        fixedColumn: false,
        attr: 'Tỉnh/Thành phố',
        type: ColumnType.TEXT,
        width: '150px',
        isFilter: true,
        hiddenTitle: true,
        isSort: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.province,
          referenceColName: 'countryCustomerId',
          name: 'provinceCustomerId',
        }
      },
      {
        id: 80003,
        name: 'customer_address.district.district_name',
        fixedColumn: false,
        attr: 'Quận/Huyện',
        type: ColumnType.TEXT,
        isSort: true,
        width: '150px',
        isFilter: true,
        hiddenTitle: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.district,
          referenceColName: 'provinceCustomerId',
          name: 'districtCustomerId',
        }
      },
      {
        id: 80004,
        name: 'customer_address.commune.commune_name',
        fixedColumn: false,
        attr: 'Phường/xã',
        type: ColumnType.TEXT,
        isSort: true,
        hiddenTitle: true,
        width: '150px',
        isFilter: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.commune,
          referenceColName: 'districtCustomerId',
          name: 'communeCustomerId',
        }
      },
      {
        id: 80005,
        name: 'customer_address.address_detail',
        fixedColumn: false,
        attr: 'Địa chỉ chi tiết',
        isSort: true,
        hiddenTitle: true,
        type: ColumnType.TEXT,
        width: '150px',
        isFilter: true,
        hiddenResize: false,
        filter: {type: ColumnType.TEXT, name: 'detailCustomerAddress'}
      },
    ]
  },

  {
    id: 14,
    name: 'deliveryAddress',
    fixedColumn: false,
    attr: 'Địa chỉ giao hàng',
    type: ColumnType.TEXT,
    // width: '750px',
    checked: false,
    isFilter: false,
    children: [
      {
        id: 140001,
        name: 'delivery_addresses.country.country_name',
        fixedColumn: false,
        attr: 'Quốc gia',
        type: ColumnType.TEXT,
        width: '150px',
        isSort: true,
        isFilter: true,
        hiddenTitle: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.country,
          name: 'countryDeliveryId',
        }
      },
      {
        id: 140002,
        name: 'delivery_addresses.province.province_name',
        fixedColumn: false,
        attr: 'Tỉnh/Thành phố',
        type: ColumnType.TEXT,
        width: '150px',
        isFilter: true,
        hiddenTitle: true,
        isSort: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.province,
          referenceColName: 'countryDeliveryId',
          name: 'provinceDeliveryId',
        }
      },
      {
        id: 140003,
        name: 'delivery_addresses.district.district_name',
        fixedColumn: false,
        attr: 'Quận/Huyện',
        type: ColumnType.TEXT,
        width: '150px',
        hiddenTitle: true,
        isSort: true,
        isFilter: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.district,
          referenceColName: 'provinceDeliveryId',
          name: 'districtDeliveryId',
        }
      },
      {
        id: 140004,
        name: 'delivery_addresses.commune.commune_name',
        fixedColumn: false,
        attr: 'Phường/xã',
        isSort: true,
        type: ColumnType.TEXT,
        width: '150px',
        hiddenTitle: true,
        isFilter: true,
        checked: false,
        hiddenResize: false,
        filter: {
          type: ColumnType.SELECT_INT,
          addressSelectorType: AddressSelectorTypes.commune,
          referenceColName: 'districtDeliveryId',
          name: 'communeDeliveryId',
        }
      },
      {
        id: 140005,
        name: 'delivery_address.address_detail',
        fixedColumn: false,
        attr: 'Địa chỉ chi tiết',
        type: ColumnType.TEXT,
        isSort: true,
        hiddenTitle: true,
        width: '150px',
        isFilter: true,
        hiddenResize: false,
        filter: {type: ColumnType.TEXT, name: 'detailDeliveryAddress'}
      },
    ]
  },
  {
    id: 34,
    name: 'interest',
    fixedColumn: false,
    attr: 'Sở thích',
    type: ColumnType.TEXT,
    isSort: true,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 35,
    name: 'habit',
    fixedColumn: false,
    attr: 'Thói quen',
    type: ColumnType.TEXT,
    isSort: true,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 36,
    name: 'favoriteBranch',
    fixedColumn: false,
    attr: 'Nhãn hiệu yêu thích',
    type: ColumnType.TEXT,
    isSort: true,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 37,
    name: 'favoriteProduct',
    fixedColumn: false,
    attr: 'Sản phẩm yêu thích',
    type: ColumnType.TEXT,
    isSort: true,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 38,
    name: 'complaint',
    fixedColumn: false,
    attr: 'Phản ánh/khiếu nại',
    type: ColumnType.TEXT,
    isSort: true,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false
  },
  {
    id: 39,
    name: 'favoritePromotion',
    fixedColumn: false,
    attr: 'CTKM quan tâm',
    type: ColumnType.TEXT,
    isSort: true,
    width: '150px',
    isFilter: true,
    checked: false,
    hiddenResize: false
  },

  {
    id: 40,
    name: 'isActive',
    fixedColumn: false,
    attr: 'Trạng thái',
    isSort: true,
    type: ColumnType.TAG,
    options: [],
    isFilter: true,
    width: '150px',
    filter:{ type: ColumnType.SELECT, options: [{value: 1, label:"Hoạt động"},{value: 0, label:"Không hoạt động"}]}
  },
  {
    id: 67,
    name: 'isVip',
    fixedColumn: false,
    attr: 'Khách vip',
    isSort: true,
    type: ColumnType.HTML,
    isFilter: true,
    width: '150px',
    filter:{ type: ColumnType.SELECT, selectOptionsType: 'sdsds'}
  },
  {
    id: 68,
    name: 'isVerified',
    fixedColumn: false,
    attr: 'Đã định danh',
    isSort: true,
    type: ColumnType.TAG,
    isFilter: true,
    width: '150px',
    options: [
      {value: 1, label: "Định danh", color: '#ee0033'},{value: 0, label: "Chưa định danh", color: '#667085'}
    ],
    filter:{ type: ColumnType.SELECT, selectOptionsType: 'is_verified'}
  },
  {
    id: 69,
    name: 'profileCompletePercent',
    fixedColumn: false,
    attr: 'Tỉ lệ hoàn thiện thông tin(%)',
    isSort: true,
    type: ColumnType.PROCESS,
    isFilter: true,
    width: '200px',
    filter: {type: ColumnType.RANGE_NUMBER}
  },
  {
    id: 42,
    name: 'createdUsername',
    fixedColumn: false,
    isSort: true,
    attr: 'Người tạo',
    type: ColumnType.TEXT,
    options: [],
    isFilter: true,
    checked: false,
    width: '150px',
    filter:{ name: 'createdUser', type: ColumnType.SELECT, selectOptionsType: 'user', multiple: true}
  },

  {
    id: 43,
    name: 'createdDate',
    fixedColumn: false,
    attr: 'Ngày tạo',
    type: ColumnType.TEXT_CENTER,
    isSort: true,
    options: [],
    isFilter: true,
    width: '250px',
    checked: false,
    filter:{ type: ColumnType.DATE_RANGE_PICKER},
    defaultSort: 'desc'
  },

  {
    id: 46,
    name: 'createSource',
    fixedColumn: false,
    attr: 'Nguồn tạo',
    isSort: true,
    type: ColumnType.TEXT,
    options: [],
    isFilter: true,
    checked: false,
    width: '250px',
    filter:{ type: ColumnType.TEXT}
  },

  {
    id: 44,
    name: 'updatedDate',
    fixedColumn: false,
    attr: 'Sửa lần cuối',
    type: ColumnType.TEXT_CENTER,
    options: [],
    isSort: true,
    isFilter: true,
    checked: false,
    width: '250px',
    filter:{ type: ColumnType.DATE_RANGE_PICKER}
  },

  {
    id: 45,
    name: 'updatedUsername',
    fixedColumn: false,
    attr: 'Người sửa',
    type: ColumnType.TEXT,
    isFilter: true,
    isSort: true,
    checked: false,
    width: '150px',
    filter: {
      type: ColumnType.SELECT, selectOptionsType: "user", multiple: true,
      placeholder: 'Người sửa', name:'updatedUsername'
    }
  },
  {
    id: 46,
    name: 'noteSource',
    fixedColumn: false,
    attr: 'Ghi chú nguồn ',
    isSort: true,
    type: ColumnType.TEXT,
    options: [],
    isFilter: true,
    checked: false,
    width: '250px',
    filter:{ type: ColumnType.TEXT}
  },

  {
    id: 65,
    name: 'isCompleteProfile',
    fixedColumn: false,
    attr: 'Trạng thái hoàn thiện hồ sơ',
    isSort: true,
    type: ColumnType.TAG,
    isFilter: true,
    width: '150px',
    options: [
      {value: 1, label: "Đã hoàn thiện", color: 'rgb(46 212 122)'},{value: 0, label: "Chưa hoàn thiện", color: 'rgb(255 165 0)'}
    ],
    filter:{ type: ColumnType.SELECT, selectOptionsType: "is_complete_profile"}
  },
  {
    id: 41,
    name: 'action',
    fixedColumn: false,
    isSort: false,
    attr: '',
    type: ColumnType.ACTION,
    action: {isRemove: true, isEdit: true},
    rulesAction: {isRemove: ['ROLE_CUSTOMER_DELETE'], isEdit: ['ROLE_CUSTOMER_UPDATE']},
    width: '40px',
    isFilter: false,
  },
];
