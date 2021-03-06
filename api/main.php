<?php 
	require_once("./config/Config.php");

	$db = new Connection();
	$pdo = $db->connect();
	$gm = new GlobalMethods($pdo);
	$post = new Post($pdo);
	$get = new Get($pdo);
	$auth = new Auth($pdo);

	if (isset($_REQUEST['request'])) {
		$req = explode('/', rtrim($_REQUEST['request'], '/'));
	} else {
		$req = array("errorcatcher");
	}

	switch($_SERVER['REQUEST_METHOD']) {
		case 'POST':			

			switch($req[0]) {

      // User Operations

        case 'pullAllUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullAllUser($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllUser($d), JSON_PRETTY_PRINT);
					}
				break;

				case 'pullSpecUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullSpecUser($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullSpecUser($d), JSON_PRETTY_PRINT);
					}
				break;

				case 'regUser': // Do not Touch
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->regUser($d), JSON_PRETTY_PRINT);
				break;

        case 'delUser': // Incomplete
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delUser($d), JSON_PRETTY_PRINT);
				break;

        case 'editUser': // Incomplete
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editUser($d), JSON_PRETTY_PRINT);
				break;

				case 'loginUser': // Do not Touch
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->loginUser($d), JSON_PRETTY_PRINT);
				break;

      // Request Operations

        case 'pullAllReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullAllReq($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllReq($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'pullSpecReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullSpecReq($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullSpecReq($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'pullSpecReq2':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullSpecReq2($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullSpecReq2($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'addReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addReq($d), JSON_PRETTY_PRINT);
				break;

        case 'delReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delReq($d), JSON_PRETTY_PRINT);
				break;

        case 'editReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editReq($d), JSON_PRETTY_PRINT);
				break;

      // Comment Operations

        case 'pullCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
          if(count($req)>1) {                       
						echo json_encode($get->pullCom($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCom($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'addCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addCom($d), JSON_PRETTY_PRINT);
				break;

        case 'delCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delCom($d), JSON_PRETTY_PRINT);
				break;

        case 'editCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editCom($d), JSON_PRETTY_PRINT);
				break;

				// TO BE REMOVED      

				case 'reqs':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					if(count($req)>1) {
						   
						echo json_encode($get->pullReqs($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullReqs($d), JSON_PRETTY_PRINT);
					}	
				break;

        case 'reqt':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					if(count($req)>1) {
						   
						echo json_encode($get->pullReqt($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullReqt($d), JSON_PRETTY_PRINT);
					}	
				break;

        // TO BE REMOVED 
				
			}
		break;

		case 'GET':
			switch ($req[0]) {

				default:
				http_response_code(400);
				echo "Bad Request";
				break;
			}
		break;

		default:
			http_response_code(403);
			echo "Please contact the Systems Administrator";
		break;
	}

?>
