<?php


class Post{
    protected $gm, $pdo, $get;

    public function __construct(\PDO $pdo) {
        $this->pdo = $pdo;
        $this->gm = new GlobalMethods($pdo);
        $this->get = new Get($pdo);
    }

    public function addReq($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $reqInfo = $data->reqInfo;

        $res = $this->gm->insert('tbl_req', $reqInfo);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }

    public function delReq($d) {
        $data = $d;
        $req_id = $data->req_id;
        $res = $this->gm->delete('tbl_req', $data, "req_id = '$req_id'");
        if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    } 


    
}
