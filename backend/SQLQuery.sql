/****** Script for SelectTopNRows command from SSMS  ******/
/* 
    price 이름 조회
*/
SELECT TOP (1000) 
      [A_SEQ]
      ,[A_NAME]
      ,[A_UNIT]
  FROM [DB_price].[dbo].[price]
  Where A_SEQ = 309
  Group by A_SEQ, A_NAME,[A_UNIT]

  
SELECT [A_SEQ]
      ,[A_NAME]
  FROM [DB_price].[dbo].[price]
 Group by [A_SEQ],[A_NAME]
 Order by [A_SEQ],[A_NAME]
/* 
    동태    13      =>  288
    고등어  304     =>  13
    닭고기  320     =>  134	달걀(왕란)
    ''      18      =>  18 닭고기
    18	돼지고기    =>  285	돼지고기
    171	돼지고기    =>  285	돼지고기
    171	            =>  171	달걀(10개)
    253	 조기       =>  253	오징어
    278	            =>  278	쇠고기
    285	            =>  285	돼지고기
    285	쇠고기      =>  278	쇠고기
    288	달걀(30개)  =>  288	동태
    303	달걀(10개)  =>  303	조기

"133": { A_NAME: "무(세척무)", A_UNIT: ["1개"], },
    "282": { A_NAME: "무(세척무)", A_UNIT: ["1개"], },

    const merge_lsit = [
            ["동태", 13, "동태", 288],
            ["고등어", 304, "고등어", 13],
            ["닭고기", 320, "달걀(왕란)", 134],
            ["", 18, "닭고기", 18],
            ["돼지고기", 18, "돼지고기", 285],
            ["돼지고기", 171, "돼지고기", 285],
            ["", 171, "달걀(10개)", 171],
            ["조기", 253, "오징어", 253],
            ["", 278, "쇠고기", 278],
            ["", 285, "돼지고기", 285],
            ["쇠고기", 285, "쇠고기", 278],
            ["달걀(30개)", 288, "동태", 288],
            ["달걀(10개)", 303, "조기", 303],
            ["사과(부사),중급(대)", 237, "사과(부사),중급(대)", 244],
            ["달걀(왕란)", 134, "달걀(왕란)", 181],
            ["달걀", 17, "달걀(10개)", 171],
            ["배추(중간)", 175, "배추(중간)", 271],
            ["무(세척무)", 282, "무(세척무)", 133],
            
        ]
        const sqlStrList = merge_lsit.map((arr, i) => {
            return `
            Update [DB_price].[dbo].[price]
            Set A_SEQ = ${arr[3]},
              A_NAME = '${arr[2]}'
            Where A_SEQ = ${arr[1]}
              And A_NAME = '${arr[0]}'

              GO
            `
        })
        return sqlStrList.join('')
*/
        Update [DB_price].[dbo].[price]
            Set A_SEQ = 288,
              A_NAME = '동태'
            Where A_SEQ = 13
              And A_NAME = '동태'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 13,
              A_NAME = '고등어'
            Where A_SEQ = 304
              And A_NAME = '고등어'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 134,
              A_NAME = '달걀(왕란)'
            Where A_SEQ = 320
              And A_NAME = '닭고기'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 18,
              A_NAME = '닭고기'
            Where A_SEQ = 18
              And A_NAME = ''

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 285,
              A_NAME = '돼지고기'
            Where A_SEQ = 18
              And A_NAME = '돼지고기'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 285,
              A_NAME = '돼지고기'
            Where A_SEQ = 171
              And A_NAME = '돼지고기'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 171,
              A_NAME = '달걀(10개)'
            Where A_SEQ = 171
              And A_NAME = ''

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 253,
              A_NAME = '오징어'
            Where A_SEQ = 253
              And A_NAME = '조기'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 278,
              A_NAME = '쇠고기'
            Where A_SEQ = 278
              And A_NAME = ''

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 285,
              A_NAME = '돼지고기'
            Where A_SEQ = 285
              And A_NAME = ''

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 278,
              A_NAME = '쇠고기'
            Where A_SEQ = 285
              And A_NAME = '쇠고기'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 288,
              A_NAME = '동태'
            Where A_SEQ = 288
              And A_NAME = '달걀(30개)'

              GO
            
            Update [DB_price].[dbo].[price]
            Set A_SEQ = 303,
              A_NAME = '조기'
            Where A_SEQ = 303
              And A_NAME = '달걀(10개)'

              GO
            
/* 
    name 별 카운트 조회
*/
SELECT [count_seq]
      ,[A_NAME]
      ,[A_UNIT]
      ,[A_TOTAL_PRICE]
      ,[P_YEAR]
      ,[P_YEAR_MONTH]
      ,[M_TYPE_CODE]
      ,[M_TYPE_NAME]
      ,[M_GU_CODE]
      ,[M_GU_NAME]
      ,[length]
      ,[C_CODE]
	  ,[AVER_VAL]
  FROM [DB_price].[dbo].[count]
  Where M_TYPE_CODE = ''
  And M_GU_CODE = ''
  And A_NAME like '양파%'
  Order By P_YEAR_MONTH, M_TYPE_CODE, M_GU_CODE

/* 
    price 복원 쿼리
*/

exec msdb.dbo.rds_restore_database 
        @restore_db_name='DB_price',
        @s3_arn_to_restore_from='arn:aws:s3:::project-chansoo1280/db_back/price.bak';