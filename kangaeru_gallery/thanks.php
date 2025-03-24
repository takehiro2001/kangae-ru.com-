<?php
$action = $_POST['action'];
$fname = htmlspecialchars($_POST['fname'],ENT_QUOTES);
$lname = htmlspecialchars($_POST['lname'],ENT_QUOTES);
$email = htmlspecialchars($_POST['email'],ENT_QUOTES);
$tel = htmlspecialchars($_POST['tel'],ENT_QUOTES);
$message = htmlspecialchars($_POST['message'],ENT_QUOTES);

$error = '';
if ($fname == '') {
    $error = $error.'<p>苗字が入力されていません。</p>';
}
if ($lname == '') {
    $error = $error.'<p>お名前が入力されていません。</p>';
}
if ($email == '') {
    $error = $error.'<p>メールアドレスが入力されていません。</p>';
}
if ($tel == '') {
    $error = $error.'<p>お電話番号が入力されていません。</p>';
}
if ($message == '') {
    $error = $error.'<p>メッセージが入力されていません。</p>';
}
if ($error != '') {
    echo $error;

    echo '<form method="post" action="contact.html">';
    echo '<input type="submit" name="backbtn" value="前のページへ戻る">';
    echo '</form>';
} else {
    $mail .= "以下の内容が送信されました。\n\n";
    $mail .= "【苗字】\n";
    $mail .= $fname."\n\n";
    $mail .= "【名前】\n";
    $mail .= $lname."\n\n";
    $mail .= "【メールアドレス】\n";
    $mail .= $email."\n\n";
    $mail .= "【お電話番号】\n";
    $mail .= $tel."\n\n";
    $mail .= "【メッセージ】\n";
    $mail .= $message."\n\n";

    //日本語設定を行う
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");

    $mail_to    = "kanga7777bubu@docomo.ne.jp";          //送信先メールアドレス
    $mail_subject   = "かんがエールギャラリーの相談室より送信されました";   //メールの件名
    $mail_body  = $mail;                //メールの本文
    $mail_header    = "from:".$email;           //フォームで入力されたメールアドレスを送信元として表示する

    $mailsend = mb_send_mail($mail_to, $mail_subject, $mail_body, $mail_header);

    if($mailsend == true) {
        echo '<p>メールを送信しました。</p>';
        echo '<form method="post" action="contact.html">';
        echo '<input type="submit" name="backbtn" value="前のページへ戻る">';
        echo '</form>';
    } else {
        echo '<p>メール送信でエラーが発生しました。</p>';
        echo '<form method="post" action="contact.html">';
        echo '<input type="submit" name="backbtn" value="前のページへ戻る">';
        echo '</form>';
    }
}
 
?>