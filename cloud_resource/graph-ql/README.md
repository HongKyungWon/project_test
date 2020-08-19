# graphQL with DynamoDB

* 우선은 Lambda를 사용하지 않고 Resolver를 리소스에 직접 접근해서 구현 할 예정.
* 추후에 복잡한 로직이 필요 할 경우 python3.7 런타임 이용할 것.


##  graphQL 쿼리 정보

* query : 현재 Post 의 리스트를 모두 받아오는 쿼리문

```graphql
query{
  listCustomer{
    customerId
    img
    name
    birthday
    gender
    job
  }
}
```

Request 헤더에 X-API-KEY에 api 키값을 넣으세요

api endpoint : https://q7vbvxe4cjdwnl7ke62ja5wany.appsync-api.ap-northeast-2.amazonaws.com/graphql
api key : da2-44t3qsf73zgzlkv6p62vjbf2oe